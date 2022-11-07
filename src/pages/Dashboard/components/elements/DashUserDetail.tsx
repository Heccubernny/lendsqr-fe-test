import '../../styles/dashmain.scss';
import { DashProfileDesc, DashShortProfile } from './index';
// import '../../styles/dashmain_responsiveness.scss';


function DashUserDetail()
{
  return (

    <main className="lendsqr__main">
      <div className="lendsqr__main__content__header">
        <div className="lendsqr__main__content__header__title">
          <span>Users Details</span>
        </div>
        <DashShortProfile />
      </div>
      <DashProfileDesc />
    </main >

  );
}

export default DashUserDetail;
