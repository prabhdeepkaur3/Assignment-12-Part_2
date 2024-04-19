import React from 'react';
import { RadioButtonProps } from './radio_button.types';
import styled from 'styled-components';

interface StyledRadioButtonProps {
  backgroundColor?: string;
}

const StyledRadioButton = styled.input<StyledRadioButtonProps>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const RadioButtonContainer = styled.div<{ backgroundColor?: string }>`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  padding: 10px;
`;

const Label = styled.label`
  margin-left: 5px; 
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, onChange, disabled = false, backgroundColor }) => {
  return (
    <RadioButtonContainer backgroundColor={backgroundColor}>
      <StyledRadioButton
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        backgroundColor={backgroundColor} 
      />
      <Label>{label}</Label>
    </RadioButtonContainer>
  );
};

export default RadioButton;
