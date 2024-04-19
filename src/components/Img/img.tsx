import React from 'react';
import { ImgProps } from './img.types';

const Img: React.FC<ImgProps> = ({ src, alt, backgroundColor, ...rest }) => {
  const [error, setError] = React.useState(false);

  const handleImageError = () => {
    setError(true);
  };

  const imageStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || 'transparent', 
  };

  return error ? (
    <span>Error loading image</span>
  ) : (
    <img src={src} alt={alt} onError={handleImageError} style={imageStyle} {...rest} />
  );
};

export default Img;
