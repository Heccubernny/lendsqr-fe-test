import { Link } from 'react-router-dom';
import './DashAsideItem.scss';
interface Props
{
  path: string;
  name: string;
  icon: string;
  active?: boolean;
}
function DashAsideItem({ path, name, icon }: Props)
{
  return (
    <div className="lendsqr__aside__menu__item">
      <Link to={path} className="lendsqr__aside__menu__item__link">
        <div className="lendsqr__aside__menu__item__icon">
          <img src={icon} alt="dashboard" />
        </div>
        <div className="lendsqr__aside__menu_header__container__item__title">
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
}

export default DashAsideItem;
