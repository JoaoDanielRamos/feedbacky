// * Modules
import { motion, AnimatePresence } from 'framer-motion';

// * Components
import FeedbackItem from './FeedbackItem';

// * TypeScript Interface
interface FeedbackInterface {
  rating: number;
  text: string;
  id: number;
}

export default function FeedbackList({
  feedback,
  handleDelete,
}: {
  feedback: FeedbackInterface[];
  handleDelete: any;
}) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              id={item.id}
              rating={item.rating}
              text={item.text}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // * Without animation
  /*

  return (
    <div className='feedback-list'>
      {feedback.map(item => (
        <FeedbackItem
          key={item.id}
          id={item.id}
          rating={item.rating}
          text={item.text}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
  */
}
