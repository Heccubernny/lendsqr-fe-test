import { HiMenuAlt1 } from 'react-icons/hi';
import { logo } from '../../assets/images';
import { businessesRoutes, customerRoutes, dashboardDropDownRoutes, dashboardRoutes, settingsRoutes } from '../../features/utils/routes';
import '../../styles/Dashboard/dashaside.scss';
import '../../styles/Dashboard/dashaside_responsiveness.scss';
import DashAsideItem from './elements/DashAsideItem/DashAsideItem';

function DashAside()
{
  return (
    <header className='lendsqr_aside_block'>
      <aside className="lendsqr__aside">
        <div className="lendsqr__header__logo">
          <img src={logo} alt="lendsqr_logo" />
          <div className="close">
            <HiMenuAlt1 className='close_icon' width={50} height={50}>close</HiMenuAlt1>
          </div>
        </div>
        <div className="lendsqr__aside__menu lendsqr__aside__menu__items">
          {dashboardDropDownRoutes.map((route, index) => (
            <DashAsideItem key={index} path={route.path} name={route.name} icon={route.icon} />))}
          {dashboardRoutes.map((route, index) => (
            <DashAsideItem key={index} path={route.path} name={route.name} icon={route.icon} />
          ))}

          <div className='lendsqr__aside__menu_header__container'>
            <span className='lendsqr__aside__menu__header'>Customers</span>
          </div>

          {customerRoutes.map((item) => (
            <DashAsideItem path={item.path} name={item.name} icon={item.icon} />
          ))}
          <div className='lendsqr__aside__menu_header__container'>
            <span className='lendsqr__aside__menu__header'>Business</span>
          </div>
          {businessesRoutes.map((item) => (
            <DashAsideItem path={item.path} name={item.name} icon={item.icon} />
          ))}
          <div className='lendsqr__aside__menu_header__container'>
            <span className='lendsqr__aside__menu__header'>Settings</span>
          </div>
          {settingsRoutes.map((item) => (
            <DashAsideItem path={item.path} name={item.name} icon={item.icon} />
          ))}
        </div>


      </aside>
    </header>
  );
}

export default DashAside;
