import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext({});

export const FeedbackProvider = ({ children }: { children: any }) => {
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

  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
