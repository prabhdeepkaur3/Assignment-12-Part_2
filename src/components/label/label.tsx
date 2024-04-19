import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  text: string;
  disabled?: boolean;
  backgroundColor?: string; 
}

const StyledLabel = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || 'transparent'}; 
  color: ${(props) => (props.disabled ? '#ccc' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Label: React.FC<LabelProps> = ({ text, disabled, backgroundColor }) => {
  return <StyledLabel disabled={disabled} backgroundColor={backgroundColor}>{text}</StyledLabel>;
};

export default Label;
