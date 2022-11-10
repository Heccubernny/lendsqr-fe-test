export interface DashNavProps
{
    avatar_name: string;
}


// Path: src\features\interface\IUser.tsx

export interface AsideProps
{
    id: number,
    menu_logo: any,
    menu_name: string
}

export interface UsersProps
{
    map(arg0: (user: any, index: any) => JSX.Element): import("react").ReactNode;

    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: profileProps;
    guarantor: guarantorProps;
    accountBalance: number;
    accountNumber: string;
    socials: socialsProps;
    education: educationProps;
    id: string;
    length: number;
    slice: any;
    status: string;
}

export interface profileProps
{
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
}

export interface guarantorProps
{
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
}

export interface socialsProps
{
    facebook?: string;
    twitter?: string;
    instagram?: string;
}

export interface educationProps
{
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: Array<string>;
    loanRepayment: number;
}
