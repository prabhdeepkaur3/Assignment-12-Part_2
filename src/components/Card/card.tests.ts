import React from 'react';
import { render } from '@testing-library/react';
import Card from './card';

test('renders card component', () => {
  const { getByAltText, getByText } = render(
    <Card image="image-url" text="Example Text" />
  );
  const imageElement = getByAltText('Card Image');
  const textElement = getByText('Example Text');
  expect(imageElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});

test('renders card component in disabled state', () => {
  const { container } = render(
    <Card image="image-url" text="Example Text" disabled />
  );
  expect(container.firstChild).toHaveClass('disabled');
});
