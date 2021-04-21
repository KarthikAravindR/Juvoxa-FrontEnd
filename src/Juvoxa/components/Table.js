import React from "react";

import { useTable, usePagination, useBlockLayout, useResizeColumns, useSortBy } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.scss'

const Table = ({ columns, data }) => {
    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 105,
            width: 150,
            maxWidth: 500,
        }),
        []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        resetResizing,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            data,
            columns,
            defaultColumn,
            initialState: { pageIndex: 0, pageSize: window.innerWidth > 500 ? 10 : 3 },
        },
        useSortBy,
        useBlockLayout,
        useResizeColumns,
        usePagination,
    )
    return (
        <div>
            <button className="table_row_Resizing" onClick={resetResizing}>Reset Resizing</button>
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                                    {column.render('Header')}
                                    {/* Use column.getResizerProps to hook up the events correctly */}
                                    <div
                                        {...column.getResizerProps()}
                                        className={`resizer ${column.isResizing ? 'isResizing' : ''
                                            }`}
                                    />
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} className="tr">
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()} className="td">
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <ul className="pagination">
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <button className="page-link">First</button>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <button className="page-link">{'<'}</button>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <button className="page-link">{'>'}</button>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <button className="page-link">Last</button>
                </li>
                <li>
                    <button className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </button>
                </li>
                <li>
                    <button className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px', height: '20px' }}
                        />
                    </button>
                </li>{' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul>

        </div >
    )
}
export default Table
