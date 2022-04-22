import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext({});

export const FeedbackProvider = ({ children }: { children: any }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // * Functionality: Add a new feedback
  const addFeedback = (newFeedback: {
    text: string;
    rating: number;
    id: any;
  }) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // * Functionality: Delete a feedback
  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item: { id: number }) => item.id !== id));
    }
  };

  // * Functionality: Edit a feedback
  const editFeedback = (item: {}) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedback, addFeedback, editFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
