import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Text from './text';
import  { TextProps } from './text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args}>{args.children}</Text>; 

export const Default = Template.bind({});
Default.args = {
  variant: 'content',
  children: 'Default Text',
};

export const Heading = Template.bind({});
Heading.args = {
  variant: 'heading',
  children: 'Heading Text',
};

export const Subheading = Template.bind({});
Subheading.args = {
  variant: 'subheading',
  children: 'Subheading Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'content',
  children: 'Disabled Text',
  disabled: true,
  backgroundColor: '#f0f0f0',
};
