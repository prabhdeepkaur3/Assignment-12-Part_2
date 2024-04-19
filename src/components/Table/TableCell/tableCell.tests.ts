// Tests for TableCell component
import React from 'react';
import { render } from '@testing-library/react';
import TableCell from './TableCell';

test('renders table cell component', () => {
  const { getByText } = render(<TableCell>Table Cell</TableCell>);
  const cellElement = getByText(/Table Cell/i);
  expect(cellElement).toBeInTheDocument();
});
