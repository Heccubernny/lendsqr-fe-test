import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { dashboard_icon, loan, logo } from '../../../../assets/images';
import '../../styles/dashaside.scss';
import '../../styles/dashaside_responsiveness.scss';

function DashAside()
{
  const aside_menu_item = [
    { id: 1, menu_logo: loan, menu_name: "Loan" },
    { id: 2, menu_logo: dashboard_icon, menu_name: "dashboard_icon" },
    { id: 3, menu_logo: logo, menu_name: "logo" },
  ];
  return (
    <header className='lendsqr_aside_block'>

      <aside className="lendsqr__aside">
        <div className="lendsqr__header__logo">
          <img src={logo} alt="lendsqr_logo" />
          <div className="close">
            <HiMenuAlt1 className='close_icon' width={50} height={50}>close</HiMenuAlt1>

          </div>
        </div>

        {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="close_icon" width="3em" height="3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}
        <div className="lendsqr__aside__menu lendsqr__aside__menu__items">
          {/* {aside_menu_item.map((menu_item) =>
                                {
                                    <>

                                        <div className="lendsqr__aside__menu__item__icon" key={menu_item.id}>
                                            <img src={menu_item.menu_logo} alt="dashboard" />
                                        </div>
                                        <div className="lendsqr__aside__menu_header__container__item__title">
                                            <span>{menu_item.menu_name}</span>
                                        </div>
                                    </>
                                })} */}


<div className="lendsqr__aside__menu__item">
          <Link to="loan" className="lendsqr__aside__menu__item__link">
            <div className="lendsqr__aside__menu__item__icon">
              <img src={loan} alt="dashboard" />
            </div>
            <div className="lendsqr__aside__menu_header__container__item__title">
              <span>Switch Organization</span>
            </div>
          </Link>
</div>

<div className="lendsqr__aside__menu__item">
          <Link to="loan" className="lendsqr__aside__menu__item__link">
            <div className="lendsqr__aside__menu__item__icon">
              <img src={loan} alt="dashboard" />
            </div>
            <div className="lendsqr__aside__menu_header__container__item__title">
              <span>Loan</span>
            </div>
          </Link>
</div>

          <div className='lendsqr__aside__menu_header__container'>
            <span className='lendsqr__aside__menu__header'>Customers</span>
          </div>

          <div className='lendsqr__aside__menu_header__container__item'>
            <Link to="loan" className="lendsqr__aside__menu_header__container__item__link">
              <div className="lendsqr__aside__menu_header__container__item__icon">
                <img src={loan} alt="dashboard" />
              </div>
              <div className="lendsqr__aside__menu_header__container__item__title">
                <span>Loan</span>
              </div>
            </Link>
          </div>

<div className='lendsqr__aside__menu_header__container__item'>
            <Link to="loan" className="lendsqr__aside__menu_header__container__item__link">
              <div className="lendsqr__aside__menu_header__container__item__icon">
                <img src={loan} alt="dashboard" />
              </div>
              <div className="lendsqr__aside__menu_header__container__item__title">
                <span>Loan</span>
              </div>
            </Link>
          </div>

<div className='lendsqr__aside__menu_header__container__item'>
            <Link to="loan" className="lendsqr__aside__menu_header__container__item__link">
              <div className="lendsqr__aside__menu_header__container__item__icon">
                <img src={loan} alt="dashboard" />
              </div>
              <div className="lendsqr__aside__menu_header__container__item__title">
                <span>Loan</span>
              </div>
            </Link>
          </div>

<div className='lendsqr__aside__menu_header__container__item'>
            <Link to="loan" className="lendsqr__aside__menu_header__container__item__link">
              <div className="lendsqr__aside__menu_header__container__item__icon">
                <img src={loan} alt="dashboard" />
              </div>
              <div className="lendsqr__aside__menu_header__container__item__title">
                <span>Loan</span>
              </div>
            </Link>
          </div>

<div className='lendsqr__aside__menu_header__container__item'>
            <Link to="loan" className="lendsqr__aside__menu_header__container__item__link">
              <div className="lendsqr__aside__menu_header__container__item__icon">
                <img src={loan} alt="dashboard" />
              </div>
              <div className="lendsqr__aside__menu_header__container__item__title">
                <span>Loan</span>
              </div>
            </Link>
          </div>

<div className='lendsqr__aside__menu_header__container__item'>
            <Link to="loan" className="lendsqr__aside__menu_header__container__item__link">
              <div className="lendsqr__aside__menu_header__container__item__icon">
                <img src={loan} alt="dashboard" />
              </div>
              <div className="lendsqr__aside__menu_header__container__item__title">
                <span>Loan</span>
              </div>
            </Link>
          </div>

          <div className='lendsqr__aside__menu_header__container'>
            <span className='lendsqr__aside__menu__header'>Business</span>
          </div>

          <div className='lendsqr__aside__menu_header__container__item'>
            <Link to="loan" className="lendsqr__aside__menu_header__container__item__link">
              <div className="lendsqr__aside__menu_header__container__item__icon">
                <img src={loan} alt="dashboard" />
              </div>
              <div className="lendsqr__aside__menu_header__container__item__title">
                <span>Loan</span>
              </div>
            </Link>
          </div>


          <div className='lendsqr__aside__menu_header__container'>
            <span className='lendsqr__aside__menu__header'>Settings</span>
          </div>

          <div className='lendsqr__aside__menu_header__container__item'>
            <Link to="loan" className="lendsqr__aside__menu_header__container__item__link">
              <div className="lendsqr__aside__menu_header__container__item__icon">
                <img src={loan} alt="dashboard" />
              </div>
              <div className="lendsqr__aside__menu_header__container__item__title">
                <span>Loan</span>
              </div>
            </Link>
          </div>




        </div>


      </aside>
    </header>
  );
}

export default DashAside;
