import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

test('renders text component', () => {
  const { getByText } = render(<Text>Lorem ipsum</Text>);
  const textElement = getByText(/Lorem ipsum/i);
  expect(textElement).toBeInTheDocument();
});

test('changes background color when disabled', () => {
  const { getByText } = render(<Text disabled>Lorem ipsum</Text>);
  const textElement = getByText(/Lorem ipsum/i);
  expect(textElement).toHaveStyle('background-color: grey');
});
