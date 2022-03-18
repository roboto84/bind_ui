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
    index: number,
  ): string => key.concat(cellTitle, String(index));

  return (
    <table>
      <thead>
        <tr>
          {
            tableObject.headers.map((title:string, index:number) => (
              <th key={keyGenerator(tableObject.key, 'tableHeader', index)}>{title}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          tableObject.cells.map((cellValues:string[], cellIndex:number) => (
            <tr key={keyGenerator(tableObject.key, 'tableCell', cellIndex)}>
              {
                cellValues.map((tableValue:string, valueIndex:number) => (
                  <td key={keyGenerator(tableObject.key, 'valueCell', valueIndex)}>
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
