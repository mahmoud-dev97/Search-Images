import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import searchImages from "../api/api.js";
import ImageList from "./ImageList.jsx";
import PaginationPage from "./PaginationPage.jsx";
function SearchImages() {
  const [term, setTerm] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [imgList, setImgList] = useState([]);
  const [found, setFound] = useState(false);
  const handelFormSubmit = async (e) => {
    e.preventDefault();
    const result = await searchImages(term, page);
    result.total === 0 ? setFound(true) : setFound(false);
    setImgList(result.results);
    setPageCount(result.total_pages);
  };
  useEffect(() => {
    let time = setTimeout(async () => {
      const result = await searchImages(term, page);
      setImgList(result.results);
      setPageCount(result.total_pages);
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, [page]);
  return (
    <>
      <Form onSubmit={handelFormSubmit} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-3"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button variant="outline-primary" type="submit">
          Search
        </Button>
      </Form>
      <ImageList imgList={imgList} />
      {imgList.length > 0 && (
        <PaginationPage setPage={setPage} pageCount={pageCount} />
      )}
      {found && <h1>No Data found</h1>}
    </>
  );
}

export default SearchImages;
