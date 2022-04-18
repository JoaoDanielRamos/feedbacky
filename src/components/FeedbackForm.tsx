import { useEffect, useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (event: any) => {
    console.log('1', event.target.value);

    if (text === '') {
      setMessage('');
      setBtnDisabled(false);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Your review must be at least 10 characters long.');
    } else {
      setMessage('');
      setBtnDisabled(false);
    }

    setText(event.target.value);
    console.log(text);
    console.log(text.length);
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
        <Button type='submit' version={'secondary'} isDisabled={btnDisabled}>
          Send
        </Button>
      </div>
      <p>{message}</p>
    </Card>
  );
}
