// * Modules
import { FaTimes } from 'react-icons/fa';

// * Component
import Card from './shared/Card';

import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

export default function FeedbackItem({
  rating,
  text,
  id,
}: {
  rating: number;
  text: string;
  id: number;
}) {
  const { deleteFeedback }: any = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button
        onClick={() => {
          deleteFeedback(id);
        }}
        className='close'
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
}
