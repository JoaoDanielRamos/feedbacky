// * Modules
import { useEffect, useState, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

// * Components
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit }: any =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // * Triggers whenever the input value change
  const handleTextChange = (event: any) => {
    // * Validation

    if (text === '') {
      setMessage('');
      setBtnDisabled(true);
    } else if (text !== '' && text.length <= 10) {
      setBtnDisabled(true);
      setMessage('Your review must be at least 10 characters long.');
    } else {
      setMessage('');
      setBtnDisabled(false);
    }

    setText(event.target.value);
  };

  // * Triggers whenever the form is submitted
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
        setFeedbackEdit({});
      } else {
        addFeedback(newFeedback);
      }

      setSubmitted(true);
      setRating(10);
      setText('');
    }
  };

  return (
    <Card reverse={false}>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          select={(rating: number) => {
            setRating(rating);
          }}
          submitted={submitted}
        />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            value={text}
            placeholder={'Write a review'}
          />
          <Button type='submit' version={'primary'} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        <p className='message'>{message}</p>
      </form>
    </Card>
  );
}
