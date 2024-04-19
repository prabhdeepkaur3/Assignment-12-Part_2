import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableFooter from './tableFooter';
import { TableFooterProps } from './tableFooter.types';

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

const Template: StoryFn<TableFooterProps> = (args) => (
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
    <TableFooter {...args}>
      <tr>
        <td>Footer Cell 1</td>
        <td>Footer Cell 2</td>
      </tr>
    </TableFooter>
  </table>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
