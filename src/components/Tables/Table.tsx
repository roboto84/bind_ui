import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { BaseObject } from '@/views/air/types/airTypes';
import { device } from '@/styles/responsive';

export interface HeaderTitle extends BaseObject {
  titleKey: string,
  title: string
}

type TableProps = {
  tableKey: string,
  headers: HeaderTitle[],
  cells: BaseObject[]
}

enum TableSortType {
  none = 'none',
  ascending = 'ascending',
  descending = 'descending',
}

type HeaderSortState = {
  headerTitle: string,
  sortType: TableSortType,
}

const TableContainer = styled.div<GlobalThemeType>`
  overflow-y: auto;
  height: calc(100vh - 215px);
  border-radius: 3px;

  @media ${device.tabletS} {
    height: calc(100vh - 205px);
  }
`;

export function Table(props: TableProps) {
  const { tableKey, headers, cells } = props;
  const [tableCells, setTableCells] = useState<BaseObject[]>(cells);
  const [sortedHeader, setSortedHeader] = useState<HeaderSortState>({
    headerTitle: '',
    sortType: TableSortType.none,
  });
  const keyGenerator = (
    elementKey: string,
    cellTitle: string,
    uniqueId: string,
  ): string => elementKey.concat(cellTitle, uniqueId);

  const tableSort: CallableFunction = (columnHeader: string, elementCells: BaseObject[]) => {
    let sortedCells: BaseObject[];
    let sortType: TableSortType = TableSortType.none;

    if (columnHeader === sortedHeader.headerTitle) {
      sortType = sortedHeader.sortType;
    }

    switch (sortType) {
      case TableSortType.none:
        sortedCells = [...elementCells].sort((a, b) => (
          a[columnHeader] > b[columnHeader] ? 1 : -1
        ));
        setSortedHeader({
          headerTitle: columnHeader,
          sortType: TableSortType.ascending,
        });
        break;
      case TableSortType.ascending:
        sortedCells = [...elementCells].sort((a, b) => (
          a[columnHeader] < b[columnHeader] ? 1 : -1
        ));
        setSortedHeader({
          headerTitle: columnHeader,
          sortType: TableSortType.descending,
        });
        break;
      default:
        sortedCells = cells;
        setSortedHeader({
          headerTitle: '',
          sortType: TableSortType.none,
        });
    }
    setTableCells(sortedCells);
  };

  const headerTitle = (columnKey: string, columnTitle: string) => {
    let newColumnTitle: string = columnTitle;

    if (columnKey === sortedHeader.headerTitle) {
      if (sortedHeader.sortType === TableSortType.ascending) {
        newColumnTitle = `${columnTitle} ▲`;
      } else if (sortedHeader.sortType === TableSortType.descending) {
        newColumnTitle = `${columnTitle} ▼`;
      }
    }
    return newColumnTitle;
  };

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {
            headers.map((headerObject:HeaderTitle) => {
              const isSortActive: boolean = sortedHeader.headerTitle === headerObject.titleKey;
              const title: string = headerTitle(headerObject.titleKey, headerObject.title);
              return (
                <th
                  title={`${title}`}
                  className={isSortActive ? 'active' : ''}
                  key={keyGenerator(tableKey, 'tableHeader', headerObject.title)}
                  onClick={() => tableSort(headerObject.titleKey, tableCells)}
                >
                  {title}
                </th>
              );
            })
          }
          </tr>
        </thead>
        <tbody>
          {
            tableCells.map((cellObject:BaseObject, cellIndex:number) => (
              <tr key={keyGenerator(tableKey, 'tableCell', String(cellIndex))}>
                {
                  Object.keys(cellObject).map((ObjectKey:string, valueIndex:number) => (
                    <td key={keyGenerator(tableKey, ObjectKey, String(valueIndex))}>
                      {cellObject[ObjectKey]}
                    </td>
                  ))
              }
              </tr>
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={headers.length}>
              {tableCells.length} records
            </td>
          </tr>
        </tfoot>
      </table>
    </TableContainer>
  );
}
