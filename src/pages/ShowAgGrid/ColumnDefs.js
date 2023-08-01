export const columnDefs = [
  {
    headerName: "PACKAGING",
    field: "PACKAGING",
    rowGroup: true,
    enableRowGroup: true,
  },
  { headerName: "KEY_ACCOUNT_SPEC", field: "KEY_ACCOUNT_SPEC" },
  { headerName: "PRICE", field: "PRICE" },
  { headerName: "PRODUCT_NAME", field: "PRODUCT_NAME" },
  { headerName: "BRAND", field: "BRAND" },
];

export const defaultColoumn = {
  sortable: false,
  flex: 1,
  floatingFilter: false,
  minWidth: 150,
};
