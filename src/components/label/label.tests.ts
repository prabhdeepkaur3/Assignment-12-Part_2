import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label is visible', () => {
  render(<Label text="Test Label" />);
  const labelElement = screen.getByText(/Test Label/i);
  expect(labelElement).toBeInTheDocument();
});
