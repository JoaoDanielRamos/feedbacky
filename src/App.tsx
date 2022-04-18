//Modules
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';

// Components
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const newFeedback = [...feedback];
      setFeedback(newFeedback.filter((item: { id: number }) => item.id !== id));
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;
