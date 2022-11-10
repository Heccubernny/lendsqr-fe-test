import { OptionModal } from '../../';
import { UsersProps } from '../../../../features/interface/IUser';
interface Props
{
    user: UsersProps;
    createAt: string;
    handleModal: () => void;
    show: boolean;
    userId: string;
}


function DataTableRow({ user, createAt, handleModal, show, userId }: Props)
{
    return (



        <tr className="lendsqr__main__content___body__table__data_row" key={user.id} id={user.id}>
            <td className="lendsqr__main__content___body__table__data">{user.orgName}</td>
            <td className="lendsqr__main__content___body__table__data">{user.userName}</td>
            <td className="lendsqr__main__content___body__table__data">{user.email}</td>
            <td className="lendsqr__main__content___body__table__data">{user.phoneNumber}</td>
            <td className="lendsqr__main__content___body__table__data">
                {createAt}
            </td>

            <td className={`lendsqr__main__content___body__table__data lendsqr__main__content___body__table__data__status`}>
                {user.status === user.status ? (<p className={`${user.status}`}>{user.status}</p>) : (<p className="inactive">{user.status}</p>)}

            </td>

            <td onClick={handleModal} id={user.id} className={`lendsqr__main__content___body__table__data__option`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5530_2616)"><path d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z" fill="#545F7D"></path></g><defs><clipPath id="clip0_5530_2616"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>

            </td>
            <OptionModal show={!show} id={userId} />

        </tr >
    );
}

export default DataTableRow;
