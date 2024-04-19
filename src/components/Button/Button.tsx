import React from 'react';
import { ButtonProps } from './Button.types';
import styled, { css } from 'styled-components';

interface StyledButtonProps {
  disabled?: boolean;
  hover?: boolean;
  pressed?: boolean;
  backgroundColor?: string; 
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor || '#ccc'}; // Use backgroundColor prop or default to #ccc
  
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  ${(props) =>
    props.hover &&
    css`
      &:hover {
        background-color: #f0f0f0;
      }
    `}

  ${(props) =>
    props.pressed &&
    css`
      &:active {
        background-color: #dcdcdc;
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, hover = false, pressed = false, backgroundColor }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      hover={hover}
      pressed={pressed}
      backgroundColor={backgroundColor} 
    >
      {label}
    </StyledButton>
  );
};

export default Button;
