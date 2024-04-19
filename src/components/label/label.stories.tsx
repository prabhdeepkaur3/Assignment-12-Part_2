import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Label from './label';
import { LabelProps } from './label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label Text',
  backgroundColor: '#ffffff', 
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  disabled: true,
};
