import { UsersProps } from '../interface/IUser';
export const getUser = () =>
{
    const users = localStorage.getItem("users");
    if (users)
    {
        return JSON.parse(users);
    }
    return [];
};

export const getUserById = (id: number) =>
{
    const users = getUser();
    const user = users.find((user: UsersProps) => Number(user.id) === id);
    return user;
};

export const setUsers = (users: UsersProps[]) =>
{
    localStorage.setItem("users", JSON.stringify(users));
};

export const removeUser = (id: string) =>
{
    const users = getUser();
    const newUsers = users.filter((user: UsersProps) => user.id !== id);
    setUsers(newUsers);
};

export const removeUsers = () =>
{
    localStorage.removeItem("users");
}
