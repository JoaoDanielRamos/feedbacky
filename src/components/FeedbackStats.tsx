interface FeedbackInterface {
  rating: number;
  text: string;
  id: number;
}

export default function FeedbackStats({
  feedback,
}: {
  feedback: FeedbackInterface[];
}) {
  const average: number =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  // * If The average ends with 0, the regex expression will replace it with an empty string
  average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
