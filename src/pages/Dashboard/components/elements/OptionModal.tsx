import { Link } from 'react-router-dom';
import { loan } from '../../../../assets/images';


const OptionModal = ({ users, show, id }: any) =>
{



  return (
    <>
      {show && (
        <div className="modal__wrapper">
          <div className="modal-backdrop" />
          <div className="modal-box">

            <div className="modal-content">

              <div className="modal-body">

                {
                  users && users.map((index: number) =>
                  {
                    return (

                      <Link to={"/user/" + index} className="lendsqr__aside__menu__item">
                        <div className="lendsqr__aside__menu__item__icon">
                          <img src={loan} alt="dashboard" />
                        </div>
                        <div className="lendsqr__aside__menu__item__title">
                          <span>View Details</span>
                        </div>
                      </Link>
                    );
                  })
                }


                <Link to="loan" className="lendsqr__aside__menu__item">
                  <div className="lendsqr__aside__menu__item__icon">
                    <img src={loan} alt="dashboard" />
                  </div>
                  <div className="lendsqr__aside__menu__item__title">
                    <span>Loan</span>
                  </div>
                </Link>

                <Link to="loan" className="lendsqr__aside__menu__item">
                  <div className="lendsqr__aside__menu__item__icon">
                    <img src={loan} alt="dashboard" />
                  </div>
                  <div className="lendsqr__aside__menu__item__title">
                    <span>Loan</span>
                  </div>
                </Link>
              </div>


            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default OptionModal;
