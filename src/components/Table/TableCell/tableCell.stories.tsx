import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableCell from './tableCell';
import { TableCellProps } from './tableCell.types';

export default {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

const Template: StoryFn<TableCellProps> = (args) => <TableCell {...args}>Table Cell</TableCell>;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
