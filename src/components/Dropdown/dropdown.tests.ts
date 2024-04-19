import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown component', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ];
  const onChange = jest.fn();
  const { getByLabelText } = render(<Dropdown options={options} onChange={onChange} />);
  const dropdownElement = getByLabelText('Dropdown');
  expect(dropdownElement).toBeInTheDocument();
});

test('calls onChange callback when an option is selected', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ];
  const onChange = jest.fn();
  const { getByLabelText } = render(<Dropdown options={options} onChange={onChange} />);
  const dropdownElement = getByLabelText('Dropdown');
  fireEvent.change(dropdownElement, { target: { value: 'option1' } });
  expect(onChange).toHaveBeenCalledWith('option1');
});
