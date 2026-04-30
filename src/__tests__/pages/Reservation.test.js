import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Reservation from '../../pages/reservation/Reservation';
import ReservationForm from '../../pages/reservation/ReservationForm';
import { generateTimeOptions, submitAPI } from '../../utils/fakeAPI';

// ─── fakeAPI unit tests ─────────────────────────────────────────────────────

test('generateTimeOptions returns an array of time strings', () => {
  const times = generateTimeOptions(new Date('2024-06-15'));
  expect(Array.isArray(times)).toBe(true);
  // Times should be HH:MM strings in the 17:00–23:30 window
  times.forEach((t) => expect(t).toMatch(/^(1[7-9]|2[0-3]):[03]0$/));
});

test('submitAPI returns true for valid data', () => {
  const result = submitAPI({ date: '2024-12-31', time: '19:00', guests: 2, occasion: 'Birthday' });
  expect(result).toBe(true);
});

// ─── Reservation page renders ───────────────────────────────────────────────

test('Reservation page renders the main heading', () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /Reserve a Table/i })).toBeInTheDocument();
});

// ─── ReservationForm unit tests ─────────────────────────────────────────────

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const mockSubmit     = jest.fn();

function renderForm() {
  return render(
    <MemoryRouter>
      <ReservationForm availableTimes={availableTimes} submitData={mockSubmit} />
    </MemoryRouter>
  );
}

test('ReservationForm renders all required fields', () => {
  renderForm();
  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});

test('ReservationForm submit button is present', () => {
  renderForm();
  expect(screen.getByRole('button', { name: /Make Your reservation/i })).toBeInTheDocument();
});

test('ReservationForm calls submitData when form is submitted', () => {
  renderForm();
  fireEvent.click(screen.getByRole('button', { name: /Make Your reservation/i }));
  expect(mockSubmit).toHaveBeenCalled();
});

test('date input accepts a valid date value', () => {
  renderForm();
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2024-12-31' } });
  expect(dateInput.value).toBe('2024-12-31');
});

test('guests input accepts a value within min/max range', () => {
  renderForm();
  const guestsInput = screen.getByLabelText(/Guests/i);
  fireEvent.change(guestsInput, { target: { value: '4' } });
  expect(guestsInput.value).toBe('4');
});

test('available times are rendered as select options', () => {
  renderForm();
  availableTimes.forEach((time) => {
    expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
  });
});
