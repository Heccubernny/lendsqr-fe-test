import { DashMain } from "../../components/Dashboard";
import Layout from './Layout';

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
