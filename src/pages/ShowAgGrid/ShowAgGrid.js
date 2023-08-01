/* eslint-disable */

import React, { useEffect, useState } from "react";

// import { useNavigate } from "react-router";

import { getData } from "../../mockData/getData";
import { columnDefs, defaultColoumn } from "./ColumnDefs";
import CustomAgGrid from "../../components/CustomAgGrid";

const initialNew = {
  code: "",
  startDate: "",
  endDate: "",
  active: true,
  description: "",
  schoolId: -1,
  statusId: -1,
};
const initialValue = {
  name: "",
  startDate: "",
  endDate: "",
  active: true,
  description: "",
  schoolId: -1,
  statusId: -1,
};
const oldData = {
  name: "",
  startDate: "",
  endDate: "",
  active: true,
  description: "",
  schoolId: -1,
  active: -1,
};
const initialNewDate = { startDate: "", endDate: "" };

function ShowAgGrid() {
  // const navigate = useNavigate();
  const [params, setParams] = useState("");

  const token = localStorage.getItem("token");

  const [tableData, setTableData] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue);

  const [newData, setNewData] = useState(initialNew);

  const [roles, setRoles] = useState([]);
  const [gridApi, setGridApi] = useState(null);

  const [selectedData, setSelectedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
  };

  // calling getUsers function for first time
  useEffect(() => {
    const data = getData();
    setTableData(data);
    console.log("data", data);
  }, []);

  //fetching data data from server
  // const getDataFromApi = async () => {
  //   setLoading(true);
  //   const response = await fullResponse(axiosInstance);
  //   setLoading(false);
  //   response && setData(response?.results);
  // };

  //=========================

  const onChangeSearch = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    const queryString = Object.keys(searchData)
      .map((key) => `${key}=${searchData[key]}`)
      .join("&");
    setParams(queryString);
    console.log("query", queryString);

    // getDataFromApi();
  };

  //=========================

  //function will trigger once selection changed
  const onSelectionChanged = (event) => {
    console.log("onselect", event.api.getSelectedRows());
    setSelectedData(event.api.getSelectedRows());
  };

  const onGridReady = (params) => {
    setGridApi(params);
    console.log(params);
  };

  // setting update row data to form data and opening pop up window

  return (
    <div>
      <form autoComplete="off" noValidate>
        <div className="ag-theme-alpine" style={{ height: "400px" }}>
          <CustomAgGrid
            rowData={tableData}
            columnDefs={columnDefs}
            defaultColDef={defaultColoumn}
            onGridReady={onGridReady}
            // rowSelection="multiple"
            onSelectionChanged={onSelectionChanged}
          />
        </div>
      </form>
    </div>
  );
}

export default ShowAgGrid;
