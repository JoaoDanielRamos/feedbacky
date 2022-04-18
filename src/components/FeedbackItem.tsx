// * Modules
import { FaTimes } from 'react-icons/fa';

// * Component
import Card from './shared/Card';

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
