import React from 'react';
import { TableCellProps } from './tableCell.types';
import styled, { css } from 'styled-components';

const StyledTableCell = styled.td<{ disabled: boolean; backgroundColor?: string }>`
  
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}

  background-color: ${(props) => props.backgroundColor || 'inherit'};
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled = false, backgroundColor }) => {
  return <StyledTableCell disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledTableCell>;
};

export default TableCell;
