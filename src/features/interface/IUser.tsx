export interface DashNavProps
{
    avatar_name: string;
}



export interface UsersProps
{


    map(arg0: (user: any, index: any) => JSX.Element): import("react").ReactNode;
    length: number;
    email: string;
    createdAt: string;
    orgName: string;
    phoneNumber: string;
    userName: string;
    slice: any;
    id: string;
}

// Path: src\features\interface\IUser.tsx

export interface AsideProps
{
    id: number,
    menu_logo: any,
    menu_name: string
}
