/* eslint-disable */

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function CustomAgGrid(props) {
  const {
    rowData,
    columnDefs,
    defaultColDef,
    onGridReady,
    rowSelection,
    onSelectionChanged,
    frameworkComponents,
    rowHeight,
    height = "400px",
  } = props;
  return (
    <div className="ag-theme-alpine" style={{ height: height }}>
      <AgGridReact
        frameworkComponents={frameworkComponents}
        enableRtl={true}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ ...defaultColDef, resizable: true }}
        onGridReady={onGridReady}
        pagination={true}
        rowSelection={rowSelection}
        onSelectionChanged={onSelectionChanged}
        rowHeight={rowHeight}
        serverSideDatasource={true}
        serverSideInfiniteScroll={true}
        // paginationNumberFormatter={function (params) {
        //     return `<span dir='ltr'> ${params.value.toLocaleString()} </span>`;
        //   }}
      />
    </div>
  );
}
