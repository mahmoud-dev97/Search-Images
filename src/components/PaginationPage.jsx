import ReactPaginate from "react-paginate";

const PaginationPage = ({ setPage, pageCount }) => {
  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      marginPagesDisplayed={5}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="<"
      containerClassName="pagination justify-content-center p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default PaginationPage;
