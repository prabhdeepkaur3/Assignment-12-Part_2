import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Img from './img';
import placeholderImage from './img.jpg';

export default {
  title: 'Components/Img',
  component: Img,
} as Meta;

const Template: StoryFn = (args) => <Img backgroundColor={'props.background'} src={''} alt={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: placeholderImage,
  alt: 'Placeholder Image',
  width:300,
  height:200,
};

export const WithError = Template.bind({});
WithError.args = {
  src: `invalid-image-path.jpg?t=${Date.now()}`, 
  alt: 'Invalid Image',
};
