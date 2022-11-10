import { DashAside, DashNav } from "../../components/Dashboard";
import '../../styles/Dashboard/layout.scss';

interface Props
{
    children: React.ReactNode,
}
const Layout = ({ children }: Props) =>
// const Layout = () =>
{
    return (
        <>
            <DashAside />

            <main>{children}</main>
        </>
    );
}
export default Layout;
