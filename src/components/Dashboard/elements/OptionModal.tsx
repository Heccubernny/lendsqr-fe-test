import { Link } from 'react-router-dom';
import { activate, blacklist, eye } from '../../../assets/images';

interface Props
{
  id: string;
}


const OptionModal = ({ show, id }: any) =>
{
  return (
    <>
      {show ? (
        <div className={`modal__wrapper ${show ? "active" : ""}`}>
          <Link to={`/dashboard/users/${id}`} className="modal__item">
            <img src={eye} alt="eye" />
            <span>View Details</span>
          </Link>
          <div className="modal__item">
            <img src={blacklist} alt="blacklist" />
            <span>Blacklist User</span>
          </div>
          <div className="modal__item">
            <img src={activate} alt="activate" />
            <span>Activate User</span>
          </div>
        </div>
      ) : null}
    </>
  )
}
export default OptionModal;
