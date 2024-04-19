import React from 'react';
import { TextProps } from './text.types';
import styled from 'styled-components';

const StyledText = styled.span<TextProps>`
  font-family: Arial, sans-serif;
  font-size: ${props => {
    switch (props.variant) {
      case 'heading':
        return '24px';
      case 'subheading':
        return '18px';
      case 'content':
      default:
        return '16px';
    }
  }};
  color: ${props => props.disabled ? '#CCCCCC' : '#000000'};
  background-color: ${props => props.backgroundColor || 'transparent'}; // Use backgroundColor prop or default to transparent
`;

const Text: React.FC<TextProps> = ({ variant, disabled, children, backgroundColor }) => {
  return <StyledText variant={variant} disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledText>;
};

export default Text;
