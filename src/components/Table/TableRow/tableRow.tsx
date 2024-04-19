import React from 'react';
import { TableRowProps } from './tableRow.types';
import styled, { css } from 'styled-components';

interface StyledTableRowProps {
  disabled: boolean;
  backgroundColor?: string; 
}

const StyledTableRow = styled.tr<StyledTableRowProps>`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}

  
  background-color: ${(props) => props.backgroundColor || 'inherit'};
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled = false, backgroundColor }) => {
  return <StyledTableRow disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledTableRow>;
};

export default TableRow;
