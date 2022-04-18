import FeedbackItem from './FeedbackItem';

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
}
