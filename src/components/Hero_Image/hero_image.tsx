import React from 'react';
import { HeroImageProps } from './hero_image.types';

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled = false, width, height, backgroundColor }) => {
  const imageStyle: React.CSSProperties = {
    width: width || '100%',
    height: height || 'auto',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    backgroundColor: backgroundColor || 'transparent', 
  };

  return <img src={src} alt={alt} style={imageStyle} />;
};

export default HeroImage;
