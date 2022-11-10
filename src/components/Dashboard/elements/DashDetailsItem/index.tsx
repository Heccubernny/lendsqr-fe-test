// States
import { useState } from 'react';
import { UsersProps } from 'src/features/interface';

export const [ show, setShow ] = useState(false);
export const [ currentPage, setCurrentPage ] = useState(1);
export const [ usersPerPage, setUsersPerPage ] = useState(10);
export const [ users, setUsers ] = useState<UsersProps[]>();
export const [ userId, setUserId ] = useState("");
export const [ pageNumberLimit, setPageNumberLimit ] = useState(5);
export const [ maxPageNumberLimit, setMaxPageNumberLimit ] = useState(10);
export const [ minPageNumberLimit, setMinPageNumberLimit ] = useState(0);

export const handleModal: any = (e: any) =>
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
export const indexOfLastUser = currentPage * usersPerPage;
export const indexOfFirstUser = indexOfLastUser - usersPerPage;
export const currentUser = users?.slice(indexOfFirstUser, indexOfLastUser);
export const getAllUserIndex: any = users?.map((user, index) => index + 1).at(-1);
export const getCurrentUserIndex = currentUser?.map((user, index) => index + 1).at(-1);
//get currentPage
export const indexOfFirstPage = 1;
export const indexOfLastPage = Math.ceil(getAllUserIndex / usersPerPage);
export const currentPageIndex = currentUser?.map((user, index) => index + 1).at(-1);

//Change page
export const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

// export const totalUsers: any = users?.length
// export const targetValue: any = (e: any) => e.target.value;
//CHange User Per Page
export const changeUserPerPage = (e: any) =>
{
  // export const totalUsers: any = users?.length
  // export const targetValue: number = e.target.value
  // if (targetValue > totalUsers)
  // {
  //
  // }
  setUsersPerPage(e.target.value);
  setCurrentPage(Number(e.target.id));

}

// console.log("totalUser", totalUsers + "targetValue", targetValue)

export default { handleModal, show, setShow, currentPage, setCurrentPage, usersPerPage, setUsersPerPage, users, setUsers, userId, setUserId, pageNumberLimit, setPageNumberLimit, maxPageNumberLimit, setMaxPageNumberLimit, minPageNumberLimit, setMinPageNumberLimit, indexOfLastUser, indexOfFirstUser, currentUser, getAllUserIndex, getCurrentUserIndex, indexOfFirstPage, indexOfLastPage, currentPageIndex, paginate, changeUserPerPage }
