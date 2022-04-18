//Modules
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';

// Components
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item: { id: number }) => item.id !== id));
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;
