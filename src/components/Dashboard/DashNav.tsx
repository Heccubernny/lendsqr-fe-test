import { HiMenuAlt1 } from 'react-icons/hi';
import { avatar, logo, notification, search_icon } from "../../assets/images";
import '../../styles/Dashboard/dashnav.scss';
import '../../styles/Dashboard/dashnav_responsiveness.scss';
const DashNav = ({ handleSearch, handleSubmit, search }: any) =>
{
    return (
        <nav className="lendsqr__navbar">
            {/* <div className="lendsqr__search_bar"> */}

            <form>
                <input type="search" placeholder="Search for anything" onChange={handleSearch} value={search} />
                <button type="submit" onClick={handleSubmit} className="lendsqr__search__button">
                    <img src={search_icon} alt="search" className="lendsqr__search__button__icon" />
                </button>
            </form>
            {/* </div> */}
            <div className="lendsqr__header__user">
                <a className="lendsqr__header__docs">Docs</a>
                <img className='lendsqr_header_notification' src={notification} alt="notification" />
                <img className="lendsqr__header__user__avatar" src={avatar} alt="avatar" />
                <span className="lendsqr__header__user__name">Avatar</span>
            </div>
        </nav>
    );
}

export default DashNav;
