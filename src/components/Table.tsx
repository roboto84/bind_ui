import React from 'react';
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

type TableObject = {
  key: string,
  headers: string[],
  cells: string[][]
}

type TableProps = {
  tableObject: TableObject
}

const TableContainer = styled.div<GlobalThemeType>`
  overflow-y: auto;
  height: calc(100vh - 250px);
  border: 1px solid ${(props: GlobalThemeType) => props.theme.core.table.borderColor};
  border-radius: 3px;
`;

export function Table(props: TableProps) {
  const { tableObject } = props;
  const keyGenerator = (
    key: string,
    cellTitle: string,
    uniqueId: string,
  ): string => key.concat(cellTitle, uniqueId);

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {
            tableObject.headers.map((title:string) => (
              <th key={keyGenerator(tableObject.key, 'tableHeader', title)}>{title}</th>
            ))
          }
          </tr>
        </thead>
        <tbody>
          {
          tableObject.cells.map((cellValues:string[], cellIndex:number) => (
            <tr key={keyGenerator(tableObject.key, 'tableCell', String(cellIndex))}>
              {
                cellValues.map((tableValue:string, valueIndex:number) => (
                  <td key={keyGenerator(tableObject.key, 'valueCell', String(valueIndex))}>
                    {tableValue}
                  </td>
                ))
              }
            </tr>
          ))
        }
        </tbody>
      </table>
    </TableContainer>
  );
}
