import { Link } from 'react-router-dom';
import { next, prev } from '../../../../assets/images';
import './pagination.scss';
function Pagination({ usersPerPage, totalUsers, paginate, changeUserPerPage, currentPage, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, setMaxPageNumberLimit, setMinPageNumberLimit, setCurrentPage }: any)
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


  return (
    < div className="lendsqr__main__content___body__table__pagination" >
      {/* Show index out of total index and pagination */}

      <div className="lendsqr__main__content___body__table__pagination__index">
        <span>Showing
          <select name="changeUserPerPage" className="lendsqr__main__content___body__table__pagination__selector" defaultValue={usersPerPage} onChange={changeUserPerPage}  >




            {
              [ 10, 20, 50, 100 ].map((upp: number, index: number) =>
              {
                return (
                  <option className={`lendsqr__main__content___body__table__pagination__selector lendsqr__main__content___body__table__pagination__option_` + index} value={upp}>{upp}</option>
                )

              })
            }


          </select>
          out of {totalUsers}</span>
      </div>
      <div className="lendsqr__main__content___body__table__pagination__pages">
        <div className="lendsqr__main__content___body__table__pagination__pages__prev">
          <span>
            <Link onClick={handlePrevBtn}
              // to={"/dashboard/users/?page=" + currentPage}
              to={"/dashboard/users/?page=" + (currentPage - 1)} preventScrollReset={true}
              className={`lendsqr__main__content___body__table__pagination__pages__prev__link ${currentPage - 1 == 0 ? "disable-button" : null}`}><img src={prev} /></Link>
          </span>
        </div>
        <div className="lendsqr__main__content___body__table__pagination__pages__numbers">
          {pageDecrementBtn}


          {renderPageNumbers}

          {pageIncrementBtn}

        </div>
        <div className="lendsqr__main__content___body__table__pagination__pages__next">
          <span>
            <Link onClick={handleNextBtn}
              // to={"/dashboard/users/?page=" + currentPage}
              to={"/dashboard/users/?page=" + (currentPage + 1)} preventScrollReset={true}
              className={`lendsqr__main__content___body__table__pagination__pages__next__link ${currentPage >= totalUsers / usersPerPage ? "disable-button" : null}`}><img src={next} /></Link>
          </span>
        </div>
      </div>
    </div >
  );
}

export default Pagination;
