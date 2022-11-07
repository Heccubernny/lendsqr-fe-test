
import { avatar, notification } from "../../../../assets/images";
import '../../styles/dashnav.scss';
import '../../styles/dashnav_responsiveness.scss';


// const DashNav: React.FC<DashNavProps> = ({ name }) =>
const DashNav = ({ handleSearch, handleSubmit, search }: any) =>
{





    return (
        <nav className="lendsqr__navbar">

            {/* <div className="lendsqr__search_bar"> */}
            <form>
                <input type="search" placeholder="Search for anything" onChange={handleSearch} value={search} />
                <button type="submit" onClick={handleSubmit}>
                    <img src={search} alt="search" />
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
