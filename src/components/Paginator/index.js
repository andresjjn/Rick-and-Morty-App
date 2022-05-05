import React, { useEffect, useState } from "react";
import "../../assests/styles/paginator.css";

export default function Paginator({
  totalPages,
  setActualPage,
  pagesArr,
  setPagesArr,
  actualPage,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const button = document.getElementById(`list__element-${actualPage}`)
      button.style.backgroundColor = "rgba(144, 199, 72, 0.678)";
    }
  }, [isLoaded, actualPage]);

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
          console.log(element, index);
        });
        setPagesArr(arr);
      },
      prev: () => {
        const arr = [...pagesArr], mayor = arr[0];
        let counter = 1;
        // if (mayor === 1) return;
        for (let i = 4; i <= 0; i--) {
          console.log(i)
          arr[i] = mayor - counter;
          counter += 1
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

  return (
    <nav role="navigation" className="nav__pages">
      <ul className="list__pages">
        <li>
          <button
            className="button__pages-element"
            onClick={() => {
              pagesController("prev");
            }}
          >
            {"<<"}
          </button>
        </li>
        {pagesArr.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              id={`list__element-${pageNumber}`}
              className="button__pages-element"
              onClick={() => pagesController("set", pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            className="button__pages-element"
            onClick={() => pagesController("next")}
          >
            {">>"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
