import React from 'react';

type TableObject = {
  key: string,
  headers: string[],
  cells: string[][]
}

type TableProps = {
  tableObject: TableObject
}

export function Table(props: TableProps) {
  const { tableObject } = props;
  const keyGenerator = (
    key: string,
    cellTitle: string,
    uniqueId: string,
  ): string => key.concat(cellTitle, uniqueId);

  return (
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
  );
}
