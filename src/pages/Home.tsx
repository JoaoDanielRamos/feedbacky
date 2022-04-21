// * Modules
import { useState } from 'react';
import FeedbackData from '../data/FeedbackData';
import { FeedbackProvider } from '../context/FeedbackContext';

// * Components
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';

export default function Home() {
  // * Application State that contains the feedback data
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <FeedbackProvider>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </FeedbackProvider>
    </>
  );
}
