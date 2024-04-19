import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Table from './table';
import TableRow from './TableRow/tableRow';
import TableHeader from './TableHeader/tableHeader';
import TableFooter from './TableFooter/tableFooter';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Table backgroundColor={'props.background'} {...args}>
    <TableRow backgroundColor={'props.background'}>
      <TableHeader backgroundColor={'props.background'}>Header 1</TableHeader>
      <TableHeader backgroundColor={'props.background'}>Header 2</TableHeader>
    </TableRow>
    <TableRow backgroundColor={'props.background'}>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </TableRow>
    <TableRow backgroundColor={'props.background'}>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </TableRow>
    <TableFooter backgroundColor={'props.background'}>
      <TableRow backgroundColor={'props.background'}>
        <td>Footer 1</td>
        <td>Footer 2</td>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
