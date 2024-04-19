import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './hero_image';
import image from './hero_image.jpg'; 

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

const Template: StoryFn = (args) => <HeroImage backgroundColor={'props.background'} src={image} alt={'Hero Image'} {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: 'Hero Image',
  width: 600, 
  height: 200, 
};

export const Disabled = Template.bind({});
Disabled.args = {
  alt: 'Hero Image',
  disabled: true,
  width: 600, 
  height: 200, 
};
