import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  const { getByText } = render(<Button onClick={() => {}} text="Test Button" />);
  const buttonElement = getByText('Test Button');
  expect(buttonElement).toBeInTheDocument();
});

test('Button changes background color when disabled', () => {
  const { getByText } = render(<Button onClick={() => {}} text="Test Button" disabled />);
  const buttonElement = getByText('Test Button');
  expect(buttonElement).toHaveStyle('background-color: #ccc');
});
