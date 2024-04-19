// Tests for TableRow component
import React from 'react';
import { render } from '@testing-library/react';
import TableRow from './TableRow';

test('renders table row component', () => {
  const { getByText } = render(
    <TableRow>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </TableRow>
  );
  const cell1Element = getByText(/Cell 1/i);
  const cell2Element = getByText(/Cell 2/i);
  expect(cell1Element).toBeInTheDocument();
  expect(cell2Element).toBeInTheDocument();
});
