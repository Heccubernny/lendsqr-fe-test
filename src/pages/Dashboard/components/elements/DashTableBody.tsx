// import { OptionModal } from './index';
import showModal from './DashDetails';
function DashTableBody({ users, show }: any)
{
    // const [ show, setShow ] = useState(false);

    // const showModal = () =>
    // {
    //     setShow(!show);
    // }


    return (
        <>
            <tbody className="lendsqr__main__content___body__table__body">
                {users ? users.length > 0 && users.map((user: any, index: number) =>
                {
                    return (


                        <tr className="lendsqr__main__content___body__table__data_row" key={index}>
                            {/* <Link to={"/user/" + index + "?username=" + user.userName + "?org=" + user.orgName}> */}

                            <td className="lendsqr__main__content___body__table__data">{user.orgName}</td>
                            <td className="lendsqr__main__content___body__table__data">{user.userName}</td>
                            <td className="lendsqr__main__content___body__table__data">{user.email}</td>
                            <td className="lendsqr__main__content___body__table__data">{user.phoneNumber}</td>
                            <td className="lendsqr__main__content___body__table__data">
                                {/* {new Intl.DateTimeFormat('en-US').format(user.createdAt)} */}
                                {user.createdAt}
                            </td>
                            <td className="lendsqr__main__content___body__table__data lendsqr__main__content___body__table__data__status__inactive"><p>
                                Inactive</p></td>
                            <td className="lendsqr__main__content___body__table__data__option" onClick={showModal}>
                                {/* <OptionModal users={user} /> */}
                                showModal

                            </td>
                        </tr>

                    );
                }) : <tr>Fetching Data, Please Wait</tr>
                }

            </tbody>
        </>
    );
}

export default DashTableBody;
function setShow(arg0: boolean)
{
    throw new Error("Function not implemented.");
}
