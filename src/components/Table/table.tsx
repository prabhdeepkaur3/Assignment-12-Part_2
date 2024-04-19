import React from 'react';
import { TableProps } from './table.types';
import styled, { css } from 'styled-components';

interface StyledTableProps {
  disabled: boolean;
  backgroundColor?: string; 
}

const StyledTable = styled.table<StyledTableProps>`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}

  background-color: ${(props) => props.backgroundColor || 'inherit'};
`;

const Table: React.FC<TableProps> = ({ children, disabled = false, backgroundColor }) => {
  return <StyledTable disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledTable>;
};

export default Table;
