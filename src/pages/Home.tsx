// * Modules
import { useState } from 'react';
import FeedbackData from '../data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';

// * Components
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';

export default function Home() {
  // * Application State that contains the feedback data
  const [feedback, setFeedback] = useState(FeedbackData);

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

  return (
    <>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}
