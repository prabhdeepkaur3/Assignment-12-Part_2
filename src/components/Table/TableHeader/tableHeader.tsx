import React from 'react';
import { TableHeaderProps } from './tableHeader.types';
import styled, { css } from 'styled-components';

interface StyledTableHeaderProps {
  disabled: boolean;
  backgroundColor?: string; 
}

const StyledTableHeader = styled.thead<StyledTableHeaderProps>`
  
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}

  
  background-color: ${(props) => props.backgroundColor || 'inherit'};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled = false, backgroundColor }) => {
  return <StyledTableHeader disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledTableHeader>;
};

export default TableHeader;
