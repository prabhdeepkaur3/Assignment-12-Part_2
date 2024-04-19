import React from 'react';

export interface CardProps {
  image: string;
  text: string;
  disabled?: boolean;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({ image, text, disabled = false, width = 300, height = 200, backgroundColor }) => {
  const cardStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    backgroundColor: backgroundColor || 'transparent',
    boxSizing: 'border-box', 
    display: 'flex', 
    flexDirection: 'column', 
  };

  const contentStyle: React.CSSProperties = {
    flexGrow: 1, 
    display: 'flex', 
    flexDirection: 'column', 
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  };

  return (
    <div style={cardStyle}>
      <div style={{ backgroundColor: backgroundColor || 'transparent', padding: '10px' }}>
        <img src={image} alt="Card Image" style={imageStyle} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
