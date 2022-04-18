import { useState } from 'react';
import Card from './shared/Card';

export default function FeedbackForm() {
  const [text, setText] = useState('');

  const handleTextChange = (event: any) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  return (
    <Card reverse={false}>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component  */}
      </form>
      <div className='input-group'>
        <input
          onChange={handleTextChange}
          type='text'
          placeholder='Write a review'
        />
        <button type='submit'>Send</button>
      </div>
    </Card>
  );
}
