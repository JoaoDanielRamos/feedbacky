import { useState } from 'react';

export default function FeedbackItem() {
  const [dthis, setDthis] = useState();

  return (
    <div className='card'>
      <div className='num-display'>10</div>
      <div className='text-display'></div>
    </div>
  );
}
