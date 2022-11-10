import { useEffect, useState } from 'react';
import { UsersProps } from '../../../features/interface';
import '../../../styles/Dashboard/dashdetails.scss';
import DataTableRow from './DashDetailsItem/DataTableRow';
import HeadTableRow from './DashDetailsItem/HeadTableRow';
import Pagination from './Pagination';
import TableSkeleton from './TableSkeleton';

const DashDetails = () =>
{
    // States
    const [ show, setShow ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ usersPerPage, setUsersPerPage ] = useState(10);
    const [ users, setUsers ] = useState<UsersProps[]>();
    const [ userId, setUserId ] = useState("");
    const [ pageNumberLimit, setPageNumberLimit ] = useState(5);
    const [ maxPageNumberLimit, setMaxPageNumberLimit ] = useState(10);
    const [ minPageNumberLimit, setMinPageNumberLimit ] = useState(0);

    const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

    // Handlers and State Action
    const fetchData = async () =>
    {
        setShow(true);
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
        setShow(false);
    };

    useEffect(() =>
    {
        fetchData();
        try { fetchData(); } catch (error) { console.log(error) }
    }, [])

    console.log("Fetching Users: ", users)

    const handleModal: any = (e: any) =>
    {
        e.preventDefault();

        const id = e.currentTarget.id;
        const top = Number(document.getElementById(id)?.offsetTop) + 30;
        const right = Number(document.getElementById(id)?.offsetWidth) - 200;

        const modal = document.querySelector(".modal__wrapper")
        modal?.classList.add(".active");
        // modal?.classList.toggle("active")

        modal?.setAttribute("style", `top: ${top}px; left: ${right}px;`)
        setUserId(id);
        setShow(!show);

    }

    //Get current user
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser = users?.slice(indexOfFirstUser, indexOfLastUser);
    const getAllUserIndex: any = users?.map((user, index) => index + 1).at(-1);
    const getCurrentUserIndex = currentUser?.map((user, index) => index + 1).at(-1);

    //get currentPage
    const indexOfFirstPage = 1;
    const indexOfLastPage = Math.ceil(getAllUserIndex / usersPerPage);
    const currentPageIndex = currentUser?.map((user, index) => index + 1).at(-1);

    //Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const changeUserPerPage = (e: any) =>
    {

        setUsersPerPage(e.target.value);
        setCurrentPage(Number(e.target.id));

    }

    return (
        <>
            <section className="lendsqr__main__content___body__tables">
                <table className="lendsqr__main__content___body__table">


                    <tr className="lendsqr__main__content___body__table__head_row">
                        <HeadTableRow />

                    </tr>

                    <tbody className="lendsqr__main__content___body__table__body">

                        {//Formatted Date
                            currentUser ? currentUser.map((user) =>
                            {
                                const formattedDate = new Date(user.createdAt).toLocaleTimeString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }).replace("at", "");
                                const createAt = formattedDate


                                return (
                                    <div>
                                        <DataTableRow user={user} createAt={createAt} handleModal={handleModal} show={show} userId={userId} />
                                    </div>


                                );
                            }) : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map((n) => <TableSkeleton type="lendsqr__main__content___body__table__data_row" key={n} />)

                        }
                    </tbody>
                </table>

                <Pagination usersPerPage={usersPerPage} totalUsers={users?.length} paginate={paginate} changeUserPerPage={changeUserPerPage} currentPage={currentPage} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} setMaxPageNumberLimit={setMaxPageNumberLimit} pageNumberLimit={pageNumberLimit} setMinPageNumberLimit={setMinPageNumberLimit} setCurrentPage={setCurrentPage} />


            </section>
        </>
    )
}

export default DashDetails;
