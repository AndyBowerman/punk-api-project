import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./UsePagination.scss";

const UsePagination = ({ handlePageClick, display }) => {
  const [renderPagination, setRenderPagination] = useState("");

  const displayPagination = () => {
    display
      ? setRenderPagination("pagination")
      : setRenderPagination("pagination-removed");
  };

  useEffect(() => {
    displayPagination();
    // eslint-disable-next-line
  }, [display]);

  return (
    <ReactPaginate
      breakLevel={"..."}
      pageCount={4}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={renderPagination}
      pageClassName={"pagination__page-item"}
      pageLinkClassName={"pagination__page-item"}
      previousClassName={"pagination__page-item"}
      previousLinkClassName={"pagination__page-item"}
      nextClassName={"pagination__page-item"}
      nextLinkClassName={"pagination__page-item"}
      breakLinkClassName={"pagination__page-item"}
      activeClassName={"pagination__active"}
    />
  );
};

export default UsePagination;
