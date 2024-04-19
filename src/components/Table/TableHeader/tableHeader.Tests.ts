// Tests for TableHeader component
import React from 'react';
import { render } from '@testing-library/react';
import TableHeader from './TableHeader';

test('renders table header component', () => {
  const { getByText } = render(<TableHeader>Table Header</TableHeader>);
  const headerElement = getByText(/Table Header/i);
  expect(headerElement).toBeInTheDocument();
});
