import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card, { CardProps } from './card'; 

import cardImage from './card_image.jpg'; 

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: StoryFn<CardProps> = ({ backgroundColor, ...args }) => (
  <Card {...args} backgroundColor={backgroundColor || 'white'} />
);
Default.args = {
  image: cardImage,
  text: 'I scream, You scream, We all scream for an ICE-CREAM!!!',
  width: 300,
  height: 200,
};

export const Disabled: StoryFn<CardProps> = ({ backgroundColor, ...args }) => (
  <Card {...args} backgroundColor={backgroundColor || 'lightgray'} />
);
Disabled.args = {
  image: cardImage,
  text: 'We donot scream for an Ice-cream anymore',
  disabled: true,
  width: 300,
  height: 200,
};
