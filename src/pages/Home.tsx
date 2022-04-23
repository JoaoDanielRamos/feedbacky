// * Modules
import { useState } from 'react';
import { FeedbackProvider } from '../context/FeedbackContext';

// * Components
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';

export default function Home() {
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
