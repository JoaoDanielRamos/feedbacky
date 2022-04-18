import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

interface FeedbackInterface {
  rating: number;
  text: string;
  id: number;
}

export default function FeedbackItem({
  rating,
  text,
  id,
  handleDelete,
}: {
  rating: number;
  text: string;
  id: number;
  handleDelete: any;
}) {
  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button onClick={() => handleDelete(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
}
