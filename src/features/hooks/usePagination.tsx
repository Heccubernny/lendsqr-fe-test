import { useMemo } from 'react';
import { Link } from "react-router-dom";

interface Props
{
  usersPerPage: number,
  totalUsers: number,
  paginate: (pageNumber: number) => void,
  changeUserPerPage: number,
  currentPage: number,
  maxPageNumberLimit: number,
  minPageNumberLimit: number,
  pageNumberLimit: number,
  setMaxPageNumberLimit: (maxPageNumberLimit: number) => void,
  setMinPageNumberLimit: (minPageNumberLimit: number) => void,
  setPage: (page: number) => void;
  setCurrentPage: (currentPage: number) => void;

}

export const usePagination = ({ usersPerPage, totalUsers, paginate, changeUserPerPage, currentPage, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, setMaxPageNumberLimit, setMinPageNumberLimit, setCurrentPage }: Props) =>
{
  const paginationRange = useMemo(() =>
  {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++)
    {
      pageNumbers.push(i);

      // console.log("total users", totalUsers, "usersPerPage", usersPerPage, "pageNumbers", pageNumbers)

    }


    const handlePrevBtn = () =>
    {
      // paginate(currentPage + 1);
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit === 0)
      {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }

      console.log("You are in page", currentPage - 1)

    }

    const handleNextBtn = () =>
    {
      // paginate(currentPage + 1);
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit)
      {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }

      console.log("You are in page", currentPage + 1)
    }


    let pageIncrementBtn: any = null;

    // if (pageNumbers.length >= maxPageNumberLimit - 2)
    if (currentPage >= 3 || currentPage >= 8)
    {
      pageIncrementBtn = <span className="page-item" onClick={handleNextBtn}> <Link to="#" className="page-link">&hellip;</Link> </span>
    }
    if (currentPage >= maxPageNumberLimit - 2)
    {
      pageIncrementBtn = null;
    }



    let pageDecrementBtn = null;

    if (currentPage <= 5)
    {
      pageDecrementBtn = <span className="page-item" onClick={handlePrevBtn}> <Link to="#" className="page-link"> &hellip;</Link> </span>
    }

    // if (currentPage >= minPageNumberLimit + 4)
    // {
    //   pageDecrementBtn = null;
    // }

    if (currentPage <= 2)
    {
      pageDecrementBtn = null;
    }


    const renderPageNumbers = pageNumbers.map((number) =>
    {
      // var element: any = document.getElementById('lendsqr__main__content___body__table__pagination__pages__number__link');
      // // element.classList.remove("lendsqr__main__content___body__table__pagination__pages__number__link")
      // element?.removeAttribute("lendsqr__main__content___body__table__pagination__pages__number__link");

      // currentPage == number ? element :

      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit)
      {
        return (
          < span key={number} className={currentPage == number ? "lendsqr__main__content___body__table__pagination__pages__number_active" : "lendsqr__main__content___body__table__pagination__pages__number_" + number
          }> <Link onClick={() => paginate(number)} to={"/dashboard/users/?page=" + (currentPage)} preventScrollReset={true} id="lendsqr__main__content___body__table__pagination__pages__number__link" className={currentPage == number ? "" : "lendsqr__main__content___body__table__pagination__pages__number__link"}>{pageNumberLimit <= 3 ? pageIncrementBtn : null} {number}</Link></span >

        );
      } else
      {
        return null;
      }


    }



    );

    ;
  }, [ usersPerPage, totalUsers, paginate, changeUserPerPage, currentPage, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, setMaxPageNumberLimit, setMinPageNumberLimit, setCurrentPage ]);

  return paginationRange;
}
// Path: src\features\hooks\usePagination.tsx
