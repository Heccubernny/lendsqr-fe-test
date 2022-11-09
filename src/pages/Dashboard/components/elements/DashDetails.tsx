import { useEffect, useState } from 'react';
import { UsersProps } from '../../../../features/interface/';
import '../../styles/dashdetails.scss';
import Pagination from './Pagination';
import TableSkeleton from './TableSkeleton';
import { filter_icon } from '../../../../assets/images';


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


                    <tr className="lendsqr__main__content___body__table__head_row">
                        <th className="lendsqr__main__content___body__table__head"><span>Organization</span> <span className="lendsqr__main__content___body__table__head_row__filter"><img src={filter_icon} /></span>
                        </th>
                        <th className="lendsqr__main__content___body__table__head"><span>Username</span> <span className="lendsqr__main__content___body__table__head_row__filter"><img src={filter_icon} /></span></th>
                        <th className="lendsqr__main__content___body__table__head"><span>Email</span> <span className="lendsqr__main__content___body__table__head_row__filter"><img src={filter_icon} /></span></th>

                        <th className="lendsqr__main__content___body__table__head"><span>Phone Number</span> <span className="lendsqr__main__content___body__table__head_row__filter"><img src={filter_icon} /></span></th>

                        <th className="lendsqr__main__content___body__table__head"><span>Date Joined</span> <span className="lendsqr__main__content___body__table__head_row__filter"><img src={filter_icon} /></span></th>
                        <th className="lendsqr__main__content___body__table__head"><span>Status</span> <span className="lendsqr__main__content___body__table__head_row__filter"><img src={filter_icon} /></span>
                        </th>
                    </tr>
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
                                        <td className="lendsqr__main__content___body__table__data lendsqr__main__content___body__table__data__status__inactive">
                                            <p>Inactive</p></td>
                                        <td className="lendsqr__main__content___body__table__data__option"
                                            key={index} onClick={showModal}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5530_2616)"><path d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z" fill="#545F7D"></path></g><defs><clipPath id="clip0_5530_2616"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                            {/* <OptionModal users={users} show={show}/> */}


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
