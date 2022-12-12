import ReactPaginate from "react-paginate";
import "./UsePagination.scss";

const UsePagination = ({ handlePageClick }) => {
  return (
    <ReactPaginate
      breakLevel={"..."}
      pageCount={14}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
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
