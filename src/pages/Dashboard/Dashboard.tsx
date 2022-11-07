import { DashMain } from "./components/elements";
import Layout from "./components/Layout";

import { useEffect } from 'react';

const Dashboard = () =>
{

    useEffect(() =>
    {
        document.title = "Lendsqr - DashBoard"
    });

    return (
        <div>
            <Layout />

            <DashMain />

        </div >
    );
}

export default Dashboard;
