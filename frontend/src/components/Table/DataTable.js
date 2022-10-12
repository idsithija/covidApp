import React from "react";
import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { useState } from "react";
function Getzentable({
  columns,
  data,
  isSelectedRow,
  rowPerTable,
  getPage,
  rowClick,
}) {
  const [currentPageVal, setCurrentPageVal] = useState();
  const [prevVal, setPrevVal] = useState(1);

  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage,
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage);
      let currentPageValue = currentPage;
      setCurrentPageVal(currentPageValue);
      getPage(currentPageValue);
      setPrevVal(currentPage);
    };

    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
      let currentPageValue = currentPage + 1;
      getPage(currentPageValue);
      setCurrentPageVal(currentPageValue);
      setPrevVal(currentPage + 1);
    };

    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
      let currentPageValue = e.target.value;
      getPage(currentPageValue);
      setCurrentPageVal(Number(e.target.value));
      setPrevVal(Number(e.target.value));
    };

    // const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(rowPerTable);
    const nextDisabled = currentPageVal === rowPerTable;
    let previosDisabled = currentPage === prevVal;
    // function getNumberOfPages(rowCount, rowsPerPage) {
    //     return Math.ceil(rowCount / rowsPerPage);
    // }

    function toPages(pages) {
      const results = [];

      for (let i = 1; i <= pages; i++) {
        results.push(i);
      }

      return results;
    }

    return (
      <nav>
        <div className="pagination-margin">
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <button
                className="page-link text-black"
                onClick={handleBackButtonClick}
                disabled={previosDisabled}
                aria-disabled={previosDisabled}
                aria-label="previous page"
              >
                Previous
              </button>
            </li>
            {pageItems.map((page) => {
              const className =
                page === currentPage ? "page-item" : "page-item";

              return (
                <li key={page} className={className}>
                  <button
                    className="page-link text-black"
                    onClick={handlePageNumber}
                    value={page}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
            <li className="page-item">
              <button
                className="page-link text-black"
                onClick={handleNextButtonClick}
                disabled={nextDisabled}
                aria-disabled={nextDisabled}
                aria-label="next page"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  return (
    <DataTable
      title=""
      columns={columns}
      data={data}
      defaultSortFieldID={1}
      pagination={1 < rowPerTable ? true : false}
      paginationComponent={BootyPagination}
      selectableRows={isSelectedRow}
      pageItems
      paginationPerPage={20}
      fixedHeader
      fixedHeaderScrollHeight="450px"
      responsive
      selectableRowsHighlight
      highlightOnHover
      striped
      onRowClicked={rowClick}
    />
  );
}

Getzentable.propTypes = {
  columns: PropTypes.any,
  data: PropTypes.any,
  rowsPerPage: PropTypes.number,
  rowCount: PropTypes.number,
  onChangePage: PropTypes.number,
  onChangeRowsPerPage: PropTypes.number, // available but not used here
  currentPage: PropTypes.number,
  isSelectedRow: PropTypes.bool,
  rowPerTable: PropTypes.number,
  getPage: PropTypes.func,
  rowClick: PropTypes.func,
};

Getzentable.defaultProps = {
  isSelectedRow: false,
};

export default Getzentable;
