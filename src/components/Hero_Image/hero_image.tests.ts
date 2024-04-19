import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders hero image component', () => {
  const { getByAltText } = render(<HeroImage src="test.jpg" alt="Test Image" />);
  const imageElement = getByAltText('Test Image');
  expect(imageElement).toBeInTheDocument();
});
