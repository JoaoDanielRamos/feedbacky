import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { Item } from 'framer-motion/types/components/Reorder/Item';

const FeedbackContext: any = createContext({});

export const FeedbackProvider = ({ children }: { children: any }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback]: [
    feedback: { text: string; rating: number; id: number }[],
    setFeedback: any
  ] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const getDataFromApi = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/feedback?_sort=id&_order=desc`
      );

      const data = await response.data;

      setFeedback(data);
      setIsLoading(false);
    } catch (error: any) {
      throw new error();
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  // * Functionality: Add a new feedback
  const addFeedback = async (newFeedback: {
    text: string;
    rating: number;
    id: number;
  }) => {
    try {
      await axios.post('http://localhost:5000/feedback', newFeedback);
      setFeedback([newFeedback, ...feedback]);
    } catch (error: any) {
      throw new error();
    }
  };

  // * Functionality: Delete a feedback
  const deleteFeedback = async (id: number) => {
    try {
      if (window.confirm('Are you sure you want to delete this feedback?')) {
        await axios.delete(`http://localhost:5000/feedback/${id}`);

        setFeedback(feedback.filter((item: { id: number }) => item.id !== id));
      }
    } catch (error: any) {
      throw new error();
    }
  };

  // * Functionality: Edit a feedback
  const editFeedback = (item: {}) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  // * Functionality: Update the feedback on the API
  const updateFeedback = async (id: number, udpItem: {}) => {
    try {
      await axios.put(`http://localhost:5000/feedback/${id}`, udpItem);

      setFeedback(
        feedback.map(item => (item.id === id ? { ...item, ...udpItem } : item))
      );
    } catch (error: any) {
      throw new error();
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        setFeedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
