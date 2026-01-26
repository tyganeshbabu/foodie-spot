import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page', () => {
  render(<App />);
  const logoElements = screen.getAllByAltText(/Foodie Spot Logo/i);
  expect(logoElements.length).toBeGreaterThan(0);
});
