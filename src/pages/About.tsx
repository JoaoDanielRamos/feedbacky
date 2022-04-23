import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

export default function About() {
  return (
    <Card reverse={false}>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a React App to leave feedback for a product or service.</p>
        <p>Version: 1.0.0</p>

        <Link to='/'>Go back to home.</Link>
      </div>
    </Card>
  );
}
