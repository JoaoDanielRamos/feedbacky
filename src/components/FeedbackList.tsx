// * Modules
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

// * Components
import Spinner from './shared/Spinner';
import FeedbackItem from './FeedbackItem';

// * TypeScript Interface

export default function FeedbackList() {
  const {
    feedback,
    isLoading,
  }: {
    feedback: { text: string; rating: number; id: number }[];
    isLoading: boolean;
  } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
