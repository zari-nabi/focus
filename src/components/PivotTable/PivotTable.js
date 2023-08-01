import React from "react";
import "./PivotTable.css";
import SearchInputFields from "../SearchInput/SearchInputFields";

const PivotTable = ({
  groupedData = [],
  filteredData = [],
  handleRowClick,
  renderIcon,
  isNestedTableOpen,
  searchQueries,
  handleInputChange,
  filteredItems,
}) => {
  const renderNestedTable = () => {
    const columns = Object.keys(filteredData[0]).slice(1);
    return (
      <>
        {/* <div className="search-row">
          {columns.map((column, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Search ...`}
              value={searchQueries[column] || ""}
              onChange={(e) => handleInputChange(e, column)}
              className="search-item"
            />
          ))}
        </div> */}
        <table className="nested-table">
          <thead>
            {columns.map((column, index) => (
              <th key={index}>
                {column}
                <br />
                <SearchInputFields
                  searchQueries={searchQueries[column] || ""}
                  filteredItems={filteredItems}
                  handleInputChange={handleInputChange}
                  // handleResultItemClick={handleResultItemClick}
                  className="search-item"
                  name={column}
                />
                {/* <input
                  key={index}
                  type="text"
                  placeholder={`Search...`}
                  value={searchQueries[column] || ""}
                  onChange={(e) => handleInputChange(e, column)}
                  className="search-item"
                /> */}
              </th>
            ))}
          </thead>
          <tbody>
            {filteredData?.length > 0 &&
              filteredData.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex}>{item[column]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div className="nested-table-container">
      <table className="base-table">
        <thead>
          <tr key={0} className="active">
            <th>Expand/Collapse</th>
            <th>PACKAGING</th>
            <th>COUNT</th>
          </tr>
        </thead>
        <tbody>
          {groupedData?.length > 0 &&
            groupedData.map((item, index) => (
              <React.Fragment key={index}>
                <tr onClick={() => handleRowClick(item)}>
                  <td>{renderIcon(item)}</td>
                  <td>{item?.PACKAGING !== "" ? item?.PACKAGING : "-"}</td>
                  <td>{item?.count}</td>
                </tr>
                {filteredData?.length > 0 &&
                  filteredData[0]?.PACKAGING === item?.PACKAGING && (
                    <tr>
                      <td colSpan="4">
                        {" "}
                        {isNestedTableOpen && renderNestedTable()}
                      </td>
                    </tr>
                  )}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
    // <>
    //   <table border={1}>
    //     <thead>
    //       <tr key={0}>
    //         <th></th>
    //         <th>PACKAGING</th>
    //         <th>{filteredData?.length > 0 ? "DETAILS" : "COUNT"}</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {groupedData?.length > 0 &&
    //         groupedData.map((item, index) => (
    //           <tr key={index}>
    //             <td>
    //               <button onClick={() => handleShow(item)}>{`>`}</button>
    //             </td>
    //             <td>{item?.PACKAGING !== "" ? item?.PACKAGING : "-"}</td>
    //             <td>
    //               {filteredData?.length > 0 &&
    //               filteredData[0]?.PACKAGING === item?.PACKAGING ? (
    //                 <table border={1}>
    //                   <thead>
    //                     <tr key={0}>
    //                       {/* <th>PACKAGING</th> */}
    //                       <th>KEY_ACCOUNT_SPEC</th>
    //                       <th>PRICE</th>
    //                       <th>PRODUCT_NAME</th>
    //                       <th>BRAND</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     {filteredData?.length > 0 &&
    //                       filteredData.map((item, index) => (
    //                         <tr key={index}>
    //                           {/* <td>{d?.PACKAGING}</td> */}
    //                           <td>{item?.KEY_ACCOUNT_SPEC}</td>
    //                           <td>{item?.PRICE}</td>
    //                           <td>{item?.PRODUCT_NAME}</td>
    //                           <td>{item?.BRAND}</td>
    //                         </tr>
    //                       ))}
    //                   </tbody>
    //                 </table>
    //               ) : (
    //                 item?.count
    //               )}
    //             </td>
    //           </tr>
    //         ))}
    //     </tbody>
    //   </table>
    // </>
  );
};

export default PivotTable;
