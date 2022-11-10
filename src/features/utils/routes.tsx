
import { dashboard_icon, filter_icon, loan } from '../../assets/images';

export const dashboardDropDownRoutes = [
    {
        path: '/dashboard',
        name: 'Switch Organization',
        icon: dashboard_icon,
        option: {
            path: '/dashboard',
            name: 'Switch Organization',
            icon: dashboard_icon,
        }
    },

]
export const dashboardRoutes = [
    {
        path: "/users",
        name: "Dashboard",
        icon: dashboard_icon,
    },

];

export const customerRoutes = [
    {
        path: "/users",
        name: "Users",
        icon: loan,
    },
    {
        path: "/users",
        name: "Guarantors",
        icon: loan,
    },
    {
        path: "/users",
        name: "Loans",
        icon: loan,
    },

    {
        path: "/users",
        name: "Decision Models",
        icon: loan,
    },

    {
        path: "/users",
        name: "Savings",
        icon: loan,
    },

    {
        path: "/users",
        name: "Loan Requests",
        icon: loan,
    },

    {
        path: "/users",
        name: "Whitelist",
        icon: loan,
    },

    {
        path: "/users",
        name: "Karma",
        icon: loan,
    },
];

export const businessesRoutes = [
    {
        path: "/users",
        name: "Organization",
        icon: loan,
    },
    {
        path: "/users",
        name: "Loan Products",
        icon: loan,
    },
    {
        path: "/users",
        name: "Savings Products",
        icon: loan,
    },

    {
        path: "/users",
        name: "Fees and Charges",
        icon: loan,
    },

    {
        path: "/users",
        name: "Transactions",
        icon: loan,
    },

    {
        path: "/users",
        name: "Services",
        icon: loan,
    },

    {
        path: "/users",
        name: "Service Account",
        icon: loan,
    },

    {
        path: "/users",
        name: "Settlements",
        icon: loan,
    },

    {
        path: "/users",
        name: "Reports",
        icon: loan,
    }
];

export const settingsRoutes = [
    {
        path: "/users",
        name: "Preferences",
        icon: loan,
    },
    {
        path: "/users",
        name: "Fees and Pricing",
        icon: loan,
    },
    {
        path: "/users",
        name: "Audit Logs",
        icon: loan,
    },

];


export const dashCardRoutes = [
    {
        icon: loan,
        title: "Loan Balance",
        amount: "N 0.00",
    },
    {
        icon: loan,
        title: "Loan Balance",
        amount: "N 0.00",
    },
    {
        icon: loan,
        title: "Loan Balance",
        amount: "N 0.00",
    },
    {
        icon: loan,
        title: "Loan Balance",
        amount: "N 0.00",
    },
]

export const optionModalListRoutes = [
    {
        id: "",
        path: "",
        name: "Users",
        icon: loan,
    },

    {
        id: "",
        path: "/blacklist/",
        name: "Users",
        icon: loan,
    },

    {
        id: "/",
        path: "/activate/",
        name: "Users",
        icon: loan,
    },
]

export const headTableRowRoutes = [
    {
        name: "Organization",
        icon: filter_icon,
    },

    {
        name: "Username",
        icon: filter_icon,
    },

    {
        name: "Email",
        icon: filter_icon,
    },

    {
        name: "Phone Number",
        icon: filter_icon,
    },

    {
        name: "Date Joined",
        icon: filter_icon,
    },

    {
        name: "Status",
        icon: filter_icon,
    },

    {
        name: "",
        icon: "",
    },


]
