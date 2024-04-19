import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button backgroundColor={'props.background'} label={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
};

export const Hover = Template.bind({});
Hover.args = {
  label: 'Hover Button',
  hover: true,
};

export const Pressed = Template.bind({});
Pressed.args = {
  label: 'Pressed Button',
  pressed: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};
