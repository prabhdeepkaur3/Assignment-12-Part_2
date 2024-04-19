// Tests for Table component
import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

test('renders table component', () => {
  const { container } = render(
    <Table>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
        </tr>
      </tbody>
    </Table>
  );
  const tableElement = container.querySelector('table');
  expect(tableElement).toBeInTheDocument();
});
