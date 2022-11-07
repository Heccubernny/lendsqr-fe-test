import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { logo } from '../../../../assets/images';
import '../../styles/dashaside.scss';
import '../../styles/dashaside_responsiveness.scss';

interface ElementProps
{
  label?: string;
  required?: boolean;
  minimizedLabel?: boolean;
  description?: string;
  error?: string;
  wrapperStyle?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[];
}

type HeaderProps = {
  children: React.ReactNode;
};

function Header(props: HeaderProps)
{
  return <div>{props.children}</div>;
}

function DashAside()
{

  const [ dataTopNav, setDataTopNav ] = useState([])
  // useEffect(() =>
  // {

  useEffect(() =>
  {

    axios
      .get("./api/dataTopNav.json")
      .then((res) => setDataTopNav(res.data))
      .catch((err) => console.log(err))

  }, [])





  const dataCustomers: any = [
    {
      id: 1,
      name: "Dashboard",
      icon: {},
      link: "/dashboard"
    },
    {
      id: 2,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 3,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 4,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 5,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 6,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 7,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 8,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 9,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 10,
      icon: {},
      name: "",
      link: "/"
    },
  ]


  const dataBusiness: any = [
    {
      id: 1,
      name: "Dashboard",
      icon: "home",
      link: "/dashboard"
    },
    {
      id: 2,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 3,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 4,
      icon: {},
      name: "",
      link: "/"
    },

    {
      id: 5,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 6,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 7,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 8,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 9,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 10,
      icon: {},
      name: "",
      link: "/"
    },
  ]

  const dataSettings = [
    {
      id: 1,
      name: "Dashboard",
      icon: {},
      link: "/dashboard"
    },
    {
      id: 2,
      icon: {},
      name: "",
      link: "/"
    },
    {
      id: 3,
      icon: {},
      name: "",
      link: "/"
    },

  ]
  // }, [])






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
          {dataTopNav.map((list: any, index: number) =>
          {
            <Link to={"dashboard/" + list.link} className="lendsqr__aside__menu__item">
              <div className="lendsqr__aside__menu__item__icon" key={index}>
                <img src={list.icon} alt="dashboard" />
              </div>
              <div className="lendsqr__aside__menu__item__title">
                <span>{list.name}</span>
              </div>
            </Link>
          })}




          <div className='lendsqr__aside__menu_customer'>
            <span className='lendsqr__aside__menu_customer__header'>Customers</span>
          </div>

          <div className='lendsqr__aside__menu_customer__item'>
            {dataCustomers.map((list: any, index: number) =>
            {
              <Link to={"dashboard/" + list.link} className="lendsqr__aside__menu_customer__item__link " key={index}>
                <div className="lendsqr__aside__menu_customer__item__icon">
                  <img src={list.icon} alt="dashboard" />
                </div>
                <div className="lendsqr__aside__menu_customer__item__title">
                  <span>{list.name}</span>
                </div>
              </Link>
            })}
          </div>

          <div className='lendsqr__aside__menu_customer'>
            <span className='lendsqr__aside__menu_customer__header'>Business</span>
          </div>

          <div className='lendsqr__aside__menu_customer__item'>
            {dataBusiness.map((list: any, index: number) =>
            {
              <Link to={"dashboard/" + list.link} className="lendsqr__aside__menu_customer__item__link" key={index}>
                <div className="lendsqr__aside__menu_customer__item__icon">
                  <img src={list.icon} alt="dashboard" />
                </div>
                <div className="lendsqr__aside__menu_customer__item__title">
                  <span>{list.name}</span>
                </div>
              </Link>
            })}

          </div>


          <div className='lendsqr__aside__menu_customer'>
            <span className='lendsqr__aside__menu_customer__header'>Settings</span>
          </div>

          <div className='lendsqr__aside__menu_customer__item'>
            {dataBusiness.map((list: any, index: number) =>
            {
              <Link to={"dashboard/" + list.link} className="lendsqr__aside__menu_customer__item__link" key={index}>
                <div className="lendsqr__aside__menu_customer__item__icon">
                  <img src={list.icon} alt="dashboard" />
                </div>
                <div className="lendsqr__aside__menu_customer__item__title">
                  <span>{list.name}</span>
                </div>
              </Link>
            })}

          </div>




        </div>


      </aside>
    </header >
  );
}

export default DashAside;
