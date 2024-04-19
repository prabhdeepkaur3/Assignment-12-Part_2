import React from 'react';
import { TableFooterProps } from './tableFooter.types';
import styled, { css } from 'styled-components';

const StyledTableFooter = styled.tfoot<{ disabled: boolean; backgroundColor?: string }>`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5; 
    `}

  /* Apply background color if provided */
  background-color: ${(props) => props.backgroundColor || 'inherit'};
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled = false, backgroundColor }) => {
  return <StyledTableFooter disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledTableFooter>;
};

export default TableFooter;
