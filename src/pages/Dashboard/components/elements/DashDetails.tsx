import { useEffect, useState } from 'react';
import { UsersProps } from '../../../../features/interface/';
import '../../styles/dashdetails.scss';
import Pagination from './Pagination';
import TableSkeleton from './TableSkeleton';


const DashDetails = () =>
{
    // States
    const [ show, setShow ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ usersPerPage, setUsersPerPage ] = useState(10);
    const [ users, setUsers ] = useState<UsersProps[]>();
    const [ pageNumberLimit, setPageNumberLimit ] = useState(5);
    const [ maxPageNumberLimit, setMaxPageNumberLimit ] = useState(5);
    const [ minPageNumberLimit, setMinPageNumberLimit ] = useState(0);


    // Handlers and State Action
    const fetchData = () =>
    {
        setShow(true);

        return (

            fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then((response) => response.json()).then((data) =>
            {
                setUsers(data);
                setShow(false);


            })

        )


    }

    useEffect(() =>
    {
        fetchData();
    }, [])

    console.log("Fetching Users: ", users)


    const showModal = () =>
    {

        setShow(!show);
    }

    //Get current user
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser = users?.slice(indexOfFirstUser, indexOfLastUser);
    const getAllUserIndex: any = users?.map((user, index) => index + 1).at(-1);
    const getCurrentUserIndex = currentUser?.map((user, index) => index + 1).at(-1);

    //Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // const totalUsers: any = users?.length
    // const targetValue: any = (e: any) => e.target.value;
    //CHange User Per Page
    const changeUserPerPage = (e: any) =>
    {
        // const totalUsers: any = users?.length
        // const targetValue: number = e.target.value
        // if (targetValue > totalUsers)
        // {
        //
        // }
        setUsersPerPage(e.target.value);
        setCurrentPage(Number(e.target.id));

    }

    // console.log("totalUser", totalUsers + "targetValue", targetValue)




    return (
        <>
            <section className="lendsqr__main__content___body__tables">
                <table className="lendsqr__main__content___body__table">
                    {/* <div> */}
                    <thead className="lendsqr__main__content___body__table__cols">

                        <tr className="lendsqr__main__content___body__table__head_row">
                            <th className="lendsqr__main__content___body__table__head">Organization</th>

                            <th className="lendsqr__main__content___body__table__head">Username</th>
                            <th className="lendsqr__main__content___body__table__head">Email</th>
                            <th className="lendsqr__main__content___body__table__head">Phone Number</th>
                            <th className="lendsqr__main__content___body__table__head">Date Joined</th>
                            <th className="lendsqr__main__content___body__table__head">Status</th>
                            <th className="lendsqr__main__content___body__table__head"></th>
                        </tr>
                    </thead>
                    {/* </div> */}
                    {/* <DashTableBody /> */}
                    {/* <div> */}
                    <tbody className="lendsqr__main__content___body__table__body">

                        {
                            currentUser ? currentUser.length > 0 && currentUser.map((user, index) =>
                            {

                                const formattedDate = new Date(user.createdAt).toLocaleTimeString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }).replace("at", "");
                                const createAt = formattedDate


                                return (



                                    <tr className="lendsqr__main__content___body__table__data_row" key={index}>

                                        {/* <Link to={"/user/" + index + "?username=" + user.userName + "?org=" + user.orgName}> */}

                                        <td className="lendsqr__main__content___body__table__data">{user.orgName}</td>
                                        <td className="lendsqr__main__content___body__table__data">{user.userName}</td>
                                        <td className="lendsqr__main__content___body__table__data">{user.email}</td>
                                        <td className="lendsqr__main__content___body__table__data">{user.phoneNumber}</td>
                                        <td className="lendsqr__main__content___body__table__data">
                                            {/* {new Intl.DateTimeFormat('en-US').format(user.createdAt)} */}

                                            {createAt}
                                        </td>
                                        <td className="lendsqr__main__content___body__table__data lendsqr__main__content___body__table__data__status__inactive"><p>
                                            Inactive</p></td>
                                        <td className="lendsqr__main__content___body__table__data__option"
                                            key={index} onClick={showModal}>
                                            {/* <OptionModal users={users} show={show}/> */}
                                            showModal

                                        </td>
                                    </tr>

                                );
                            }) : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map((n) => <TableSkeleton type="lendsqr__main__content___body__table__data_row" key={n} />)

                        }




                    </tbody>
                    {/* </div> */}





                </table>

                <Pagination usersPerPage={usersPerPage} totalUsers={users?.length} paginate={paginate} changeUserPerPage={changeUserPerPage} currentPage={currentPage} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} setMaxPageNumberLimit={setMaxPageNumberLimit} pageNumberLimit={pageNumberLimit} setMinPageNumberLimit={setMinPageNumberLimit} setCurrentPage={setCurrentPage} />


            </section>
        </>
    )
}

export default DashDetails;
