import React, { useContext, useEffect, useState } from "react";
import { Button, Pagination } from "react-bootstrap";
import { productContext } from "../../context/productContext";
import { useSearchParams } from "react-router-dom";
import { getPageCount } from "./halper";

const CustomPagination = () => {
  const { pages } = useContext(productContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getPageCount(pages);
  }, []);

  const handleChangePage = (page) => {
    searchParams.set("_page", page);
    setSearchParams(searchParams);
    setCurrentPage(page);
  };
  return (
    <Pagination>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
      />
      {getPageCount(pages).map((item) => (
        <Pagination.Item
          active={currentPage === item}
          onClick={() => handleChangePage(item)}
        >
          {item}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === pages}
        onClick={() => handleChangePage(currentPage + 1)}
      />
    </Pagination>
  );
};

export default CustomPagination;
