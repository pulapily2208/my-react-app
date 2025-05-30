
import React from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
const Pagination = ({ pages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname, search } = useLocation();

  const keyword = searchParams.get("keyword");
  const { total, totalPages, currentPage, next, prev, hasNext, hasPrev } = pages;
  const clickNotPage = (e, page)=>{
    if(page==="...") return e.preventDefault();
  }
  const formatUrl = (page) => {
    return `${pathname}?keyword=${keyword}&page=${page}`;
  };
  const renderPagesHTML = (delta = 2) => {
    let listPages = [];
    const left = currentPage - delta;
    const right = currentPage + delta;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        i === currentPage ||
        (i >= left && i <= right)
      ) {
        listPages.push(i);
      } else if (i === left - 1 || i === right + 1) {
        listPages.push("...");
      }
    }
    return listPages;
  };

  return (
    <div id="pagination">
      <ul className="pagination">
        <li className="page-item">
          {hasPrev && (
            <Link className="page-link" to={formatUrl(prev)}>
              Trang trước
            </Link>
          )}
        </li>
        {renderPagesHTML().map((page, index) => (
          <li
            key={index}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <Link onClick={(e)=>clickNotPage(e, page)} className="page-link" to={formatUrl(page)}>
              {page}
            </Link>
          </li>
        ))}
        <li className="page-item">
          {hasNext && (
            <Link className="page-link" to={formatUrl(next)}>
              Trang sau
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
