import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableRow from './tableRow';
import TableCell from '../TableCell';

export default {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

const Template: StoryFn = (args) => (
  <TableRow backgroundColor={'props.background'} {...args}>
    <TableCell backgroundColor={args.backgroundColor}>Cell 1</TableCell>
    <TableCell backgroundColor={args.backgroundColor}>Cell 2</TableCell>
  </TableRow>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
