// Tests for TableFooter component
import React from 'react';
import { render } from '@testing-library/react';
import TableFooter from './TableFooter';

test('renders table footer component', () => {
  const { getByText } = render(
    <table>
      <tbody>
        <tr>
          <td>Footer Row 1, Cell 1</td>
          <td>Footer Row 1, Cell 2</td>
        </tr>
        <tr>
          <td>Footer Row 2, Cell 1</td>
          <td>Footer Row 2, Cell 2</td>
        </tr>
      </tbody>
      <TableFooter>
        <tr>
          <td>Footer Cell 1</td>
          <td>Footer Cell 2</td>
        </tr>
      </TableFooter>
    </table>
  );
  const footerElement = getByText(/Footer Cell 1/i);
  expect(footerElement).toBeInTheDocument();
});
