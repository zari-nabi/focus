import React, { useState, useEffect } from "react";
import PivotTable from "../../components/PivotTable/PivotTable";
import { getData } from "../../mockData/getData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./TablePage.css";
import { filterItems, getGroupedData } from "./functions";
import useAxios from "../../hook/useAxios";
import { fullResponse } from "../../services/fullResponse";
import Button from "../../components/Button/Button";

const TablePage = () => {
  const [data, setData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isExpand, setIsExpand] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const [searchQueries, setSearchQueries] = useState("");

  const [isNestedTableOpen, setIsNestedTableOpen] = useState(false);

  //====if we have API and want to use axios========
  const axiosInstance = useAxios();

  //================================================
  /**
   *
   * show filtered items after every searchInput changed
   */

  //search Packaging
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter items based on the search query
    const filtered = getGroupedData(data, "PACKAGING").filter((item) =>
      item?.PACKAGING.toLowerCase().includes(query.toLowerCase())
    );
    const arr = [];
    for (let i = 0; i < filtered?.length; i++) {
      arr.push(filtered[i].PACKAGING);
    }
    setFilteredItems(arr);
  };

  //search other fields
  const handleInputChangeFields = (e) => {
    const { name, value } = e.target;
    setSearchQueries((prevQueries) => ({
      ...prevQueries,
      [name]: value,
    }));
  };
  //=================
  useEffect(() => {
    const filteredData = filterItems(data, searchQueries);
    setfilteredData(filteredData);
  }, [searchQueries, searchQuery]);

  //=====================

  /**
   *
   * @param item  get the item search and use for show filtered data
   */
  const handleResultItemClick = (item) => {
    setSearchQuery(item);
    setFilteredItems([]);
    const filtered = getGroupedData(data, "PACKAGING").filter(
      (g) => g?.PACKAGING === item
    );
    setGroupedData(filtered);
  };

  //===========================
  /**
   * show all data at the first loading of page
   * if we have an API instead of get data functions we have to use async/await for any api
   */

  //=====getData if we had API========================
  const getDataFromApi = async () => {
    setLoading(true);
    const response = await fullResponse(axiosInstance);
    setLoading(false);
    response && setData(response?.results);
  };
  //=============================
  const getAll = async () => {
    const data = await getData();
    setData(data);

    const groupedData = await getGroupedData(
      filteredData?.length > 0 ? filteredData : data,
      "PACKAGING"
    );
    setGroupedData(groupedData);
  };

  useEffect(() => {
    getAll();
  }, []);

  //=======reset queries====================
  const resetData = () => {
    setfilteredData([]);
    setSelectedItem(null);
    setSearchQueries("");
    setSearchQuery("");
  };

  //======show/hide sub tables ====================
  const handleRowClick = (current) => {
    const filtered = data.filter(
      (item) => item?.PACKAGING === current?.PACKAGING
    );
    if (!isExpand) {
      setfilteredData(filtered);
      setSelectedItem(current);
    } else {
      resetData();
    }
    setIsExpand(!isExpand);

    setIsNestedTableOpen((prevValue) => !prevValue);
  };
  //---------------------------------
  const renderIcon = (item) => {
    return selectedItem &&
      selectedItem.PACKAGING === item.PACKAGING &&
      isExpand ? (
      <FontAwesomeIcon icon={faAngleDown} />
    ) : (
      <FontAwesomeIcon icon={faAngleRight} />
    );
  };
  //=======================================
  const handleReset = () => {
    resetData();
    getAll();
  };
  //=======================================

  return (
    <>
      <div className="basesearch-container">
        <SearchInput
          searchQuery={searchQuery}
          filteredItems={filteredItems}
          handleInputChange={handleInputChange}
          handleResultItemClick={handleResultItemClick}
        />
        <Button onClick={handleReset}>Reset</Button>
      </div>
      <PivotTable
        groupedData={groupedData}
        filteredData={filteredData}
        handleRowClick={handleRowClick}
        renderIcon={renderIcon}
        searchQueries={searchQueries}
        handleInputChange={handleInputChangeFields}
        filterItems={filterItems}
        filteredItems={filteredItems}
        isNestedTableOpen={isNestedTableOpen}
      />
    </>
  );
};

export default TablePage;
