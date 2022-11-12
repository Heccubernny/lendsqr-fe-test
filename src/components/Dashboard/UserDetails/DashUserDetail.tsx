import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { back_arrow } from '../../../assets/images';
import { UsersProps } from '../../../features/interface';
import { getUserById } from '../../../features/utils/localStorage';
import '../../../styles/Dashboard/dashmainuser.scss';
import { DashProfileDesc, DashShortProfile } from '../index';


function DashUserDetail()
{

  const [ user, setUser ] = useState<UsersProps>();
  const { id } = useParams();

  const getUser = async (id: number) =>
  {
    const localData = await getUserById(id);
    let initUser: UsersProps = localData
    setUser(localData);
  };

  useEffect(() =>
  {
    getUser(Number(id));
  }, [ id ]);

  return (
    <>
      <div className="lendsqr__main__content__header">
        <div className="lendsqr__main__content__header__return__link">
          <Link to={`/dashboard/users`}>
            <img src={back_arrow} alt="back_arrow" />
            <span>Back to Users</span>
          </Link>


        </div>
        <div className="lendsqr__main__content__header__title">

          <span>Users Details</span>
          <div className="lendsqr__main__content__header__action__button">
            <button className="lendsqr__main__content__header__action__button__item blacklist__button">

              <span className="blacklist__button_text">Blacklist</span>
            </button>
            <button className="lendsqr__main__content__header__action__button__item activate__button">

              <span className="activate__button_text">Activate User</span>
            </button>

          </div>
        </div>
        <DashShortProfile user={user} />
      </div>
      <DashProfileDesc user={user} />
    </>
  );
}

export default DashUserDetail;
