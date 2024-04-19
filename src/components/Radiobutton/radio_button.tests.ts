import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders radio button component', () => {
  const { getByLabelText } = render(<RadioButton label="Option 1" />);
  const radioButton = getByLabelText('Option 1');
  expect(radioButton).toBeInTheDocument();
});

test('calls onChange when radio button is clicked', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(<RadioButton label="Option 2" onChange={handleChange} />);
  const radioButton = getByLabelText('Option 2');
  fireEvent.click(radioButton);
  expect(handleChange).toHaveBeenCalledTimes(1);
});
