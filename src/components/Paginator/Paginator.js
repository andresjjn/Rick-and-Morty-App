import React from "react";
import "./paginator.css";

const Paginator = ({
  totalPages,
  setActualPage,
  pagesArr,
  setPagesArr,
  actualPage,
}) => {

  const pagesController = (action, page = 0) => {
    const manager = {
      init: () => {
        const arr = [];
        for (let i = 0; i < 5; i++) {
          if (i <= totalPages) arr.push(i + 1);
        }
        setPagesArr(arr);
      },
      next: () => {
        const arr = [...pagesArr];
        if (arr.indexOf(totalPages) >= 0) return;
        arr.forEach((element, index) => {
          element + 5 <= totalPages
            ? (arr[index] = element + 5)
            : arr.splice(index);
        });
        setPagesArr(arr);
      },
      prev: () => {
        const arr = [...pagesArr],
          mayor = arr[0];
        let counter = 1;
        if (mayor === 1) return;
        for (let i = 4; i >= 0; i--) {
          arr[i] = mayor - counter;
          counter += 1;
        }
        setPagesArr(arr);
      },
      set: () => {
        setActualPage(page);
      },
      markPage: () => {},
    };
    return manager[action]();
  };
  const controlPrev = () => {
    pagesController("prev");
  };
  const controlNext = () => {
    pagesController("next");
  };

  return (
    <nav role="navigation" className="nav__pages">
      <ul className="list__pages">
        <li>
          <button className="button__pages-element" onClick={controlPrev}>
            {"<<"}
          </button>
        </li>
        {pagesArr.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              id={`list__element-${pageNumber}`}
              className="button__pages-element"
              style={
                pageNumber === actualPage 
                  ? {"background-color": "rgba(144, 199, 72, 0.678)"}
                  : {"background-color": "rgba(144, 199, 72, 0.384)"}}
              onClick={() => pagesController("set", pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button className="button__pages-element" onClick={controlNext}>
            {">>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
