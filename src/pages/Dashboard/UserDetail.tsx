import { DashNav, DashUserDetail } from "../../components/Dashboard";
import Layout from './Layout';

import { useEffect } from 'react';
function UserDetail()
{
  useEffect(() =>
  {
    document.title = "Lendsqr - User Details"
  });

  return (
    <div>
      <Layout />
      <section className="lendsqr__page__content">
        <DashNav avatar_name="Adedeji 1" />
        <DashUserDetail />
      </section>
    </div >
  );
}

export default UserDetail;
