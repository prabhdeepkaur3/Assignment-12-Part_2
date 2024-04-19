import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import  { RadioButtonProps } from './radio_button.types';
import RadioButton from './radio_button';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Option 2',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option 3',
  disabled: true,
  backgroundColor: '#f0f0f0', 
};
