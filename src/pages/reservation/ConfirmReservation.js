import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './confirmReservation.css';

function ConfirmedReservation() {
  return (
    <main className='confirm-container'>
      <div className='confirm-card'>
        <FaCheckCircle aria-hidden='true' className='confirm-icon' />
        <h1 className='confirm-title'>Reservation Confirmed!</h1>
        <p className='confirm-text'>Thank you for booking with Little Lemon. You will receive a confirmation email with all the details shortly.</p>
        <Link to='/'>
          <button className='orderButtonColor' style={{ width: '100%', padding: '0.75rem 1.5rem' }}>
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}

export default ConfirmedReservation;