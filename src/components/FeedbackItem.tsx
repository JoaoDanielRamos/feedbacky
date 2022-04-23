// * Modules
import { FaTimes, FaEdit } from 'react-icons/fa';

// * Component
import Card from './shared/Card';

import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

export default function FeedbackItem({
  item,
}: {
  item: {
    rating: number;
    text: string;
    id: number;
  };
}) {
  const { deleteFeedback, editFeedback }: any = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button
        onClick={() => {
          deleteFeedback(item.id);
        }}
        className='close'
      >
        <FaTimes color='navy' />
      </button>

      <button
        onClick={() => {
          editFeedback(item);
        }}
        className='edit'
      >
        <FaEdit color='navy' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}
