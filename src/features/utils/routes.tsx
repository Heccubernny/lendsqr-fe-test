
import { activate, badge_percent, bank, blacklist, briefcase, chart_bar, check, clipboard_list, cog, coins_solid, eye, filter_icon, friends, galaxy, group, handshake, home, icon, loan, money, piggy_bank, sack, scroll, sliders, times, user, user2, users } from '../../assets/images';

export const dashboardDropDownRoutes = [
    {
        path: '/dashboard',
        name: 'Switch Organization',
        icon: briefcase,
        option: {
            path: '/dashboard',
            name: 'Dashboard',
            icon: home,
        }
    },

]
export const dashboardRoutes = [
    {
        path: "/users",
        name: "Dashboard",
        icon: home,
    },

];

export const customerRoutes = [
    {
        path: "/dashboard/users",
        name: "Users",
        icon: friends,
    },
    {
        path: "/users",
        name: "Guarantors",
        icon: users,
    },
    {
        path: "/users",
        name: "Loans",
        icon: sack,
    },

    {
        path: "/users",
        name: "Decision Models",
        icon: handshake,
    },

    {
        path: "/users",
        name: "Savings",
        icon: piggy_bank,
    },

    {
        path: "/users",
        name: "Loan Requests",
        icon: group,
    },

    {
        path: "/users",
        name: "Whitelist",
        icon: check,
    },

    {
        path: "/users",
        name: "Karma",
        icon: times,
    },
];

export const businessesRoutes = [
    {
        path: "/users",
        name: "Organization",
        icon: briefcase,
    },
    {
        path: "/users",
        name: "Loan Products",
        icon: group,
    },
    {
        path: "/users",
        name: "Savings Products",
        icon: bank,
    },

    {
        path: "/users",
        name: "Fees and Charges",
        icon: coins_solid,
    },

    {
        path: "/users",
        name: "Transactions",
        icon: icon,
    },

    {
        path: "/users",
        name: "Services",
        icon: galaxy,
    },

    {
        path: "/users",
        name: "Service Account",
        icon: cog,
    },

    {
        path: "/users",
        name: "Settlements",
        icon: scroll,
    },

    {
        path: "/users",
        name: "Reports",
        icon: chart_bar,
    }
];

export const settingsRoutes = [
    {
        path: "/users",
        name: "Preferences",
        icon: sliders,
    },
    {
        path: "/users",
        name: "Fees and Pricing",
        icon: badge_percent,
    },
    {
        path: "/users",
        name: "Audit Logs",
        icon: clipboard_list,
    },

];


export const dashCardRoutes = [
    //TODO::Add background-color props to this.
    {
        color: "#ff33661d",
        icon: user2,
        title: "Users",
        amount: "2,453",
    },
    {
        color: "#5618ff24",
        icon: user,
        title: "Active Users",
        amount: "2,453",
    },
    {
        color: "#ff33661d",
        icon: loan,
        title: "Users With Loans",
        amount: "12,453",
    },
    {
        color: "#ff33661d",
        icon: money,
        title: "Users With Savings",
        amount: "102,453",
    },
]

export const optionModalListRoutes = [
    {
        id: "",
        path: "",
        name: "Users",
        icon: eye,
    },

    {
        id: "",
        path: "/blacklist/",
        name: "Users",
        icon: blacklist,
    },

    {
        id: "/",
        path: "/activate/",
        name: "Users",
        icon: activate,
    },
]

export const headTableRowRoutes = [
    {
        name: "Organization",
        icon: filter_icon,
        // col: "organization",


    },

    {
        name: "Username",
        icon: filter_icon,
        // col: "username",

    },

    {
        name: "Email",
        icon: filter_icon,
        // col: "email",

    },

    {
        name: "Phone Number",
        icon: filter_icon,
        // col: "phone_number",

    },

    {
        name: "Date Joined",
        icon: filter_icon,
        // col: "date_joined",

    },

    {
        name: "Status",
        icon: filter_icon,
        col: "status",

    },

    {
        name: "",
        icon: "",
    },


]
