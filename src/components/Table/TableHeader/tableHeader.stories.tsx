import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableHeader from './tableHeader';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

const Template: StoryFn = (args) => <TableHeader backgroundColor={'props.background'} {...args}>Table Header</TableHeader>;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
