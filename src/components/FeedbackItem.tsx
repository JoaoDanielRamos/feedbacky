import { useState } from 'react';

export default function FeedbackItem({
  rating,
  text,
}: {
  rating: number;
  text: string;
}) {
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
    </div>
  );
}
