import React from 'react';
import { render } from '@testing-library/react';
import Img from './Img';

test('renders image component', () => {
  const { getByAltText } = render(<Img src="test.jpg" alt="Test Image" />);
  const imgElement = getByAltText('Test Image');
  expect(imgElement).toBeInTheDocument();
});

test('renders error message when image fails to load', () => {
  const { getByText } = render(<Img src="invalid-url" alt="Test Image" />);
  const errorElement = getByText('Error loading image');
  expect(errorElement).toBeInTheDocument();
});
