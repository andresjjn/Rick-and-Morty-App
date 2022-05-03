import React from "react";
import "../../assests/styles/paginator.css";

export default function Paginator({ pages, setActualPage }) {
  const pagesArr = () => {
    if (pages < 5) {
      const arr = [];
      for (let i = 0; i < pages; i++) {
        arr.push(i + 1);
      }
      return arr;
    } else {
      return [1, 2, 3, 4, 5];
    }
  };

  const pagesController = (page, action) => {
    const manager = {
      next: () => {},
      prev: () => {},
      set: () => {
        setActualPage(page);
      },
    };
    return manager[action]();
  };

  return (
    <nav role="navigation" className="nav__pages">
      <ul className="list__pages">
        <li>
          <button className="button__pages-element"> {"<<"} </button>
        </li>
        {pagesArr().map((pageNumber, index) => (
          <li key={index}>
            <button
              className="button__pages-element"
              onClick={() => pagesController(pageNumber, "set")}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button className="button__pages-element">{">>"}</button>
        </li>
      </ul>
    </nav>
  );
}
