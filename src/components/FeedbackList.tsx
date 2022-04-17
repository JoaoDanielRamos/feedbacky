import { useState } from 'react';

import FeedbackItem from './FeedbackItem';

interface FeedbackInterface {
  rating: number;
  text: string;
  id: number;
}

export default function FeedbackList({
  feedback,
}: {
  feedback: FeedbackInterface[];
}) {
  return (
    <div>
      {feedback.map((item, key) => (
        <FeedbackItem key={key} rating={item.rating} text={item.text} />
      ))}
    </div>
  );
}
