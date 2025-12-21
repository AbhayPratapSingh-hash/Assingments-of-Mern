import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Oops! This page doesn't exist.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}