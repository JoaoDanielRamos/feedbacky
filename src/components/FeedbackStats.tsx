import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStats() {
  const {
    feedback,
  }: { feedback: { text: string; rating: number; id: number }[] } =
    useContext(FeedbackContext);

  let average: number =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  // * If The average ends with 0, the regex expression will replace it with an empty string
  const averageFixed = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : averageFixed}</h4>
    </div>
  );
}
