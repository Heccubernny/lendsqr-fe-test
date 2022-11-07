import '../../styles/dashcard.scss';
// import '../../styles/dashnav_responsiveness.scss';
import { user2 } from "../../../../assets/images";
function DashShortProfile()
{
  return (
    <section>
      <div className="lendsqr__main__content__body__shortprofile">
        <div className="lendsqr__main__content__body__shortprofile__card">
          <div className="lendsqr__main__content__body__shortprofile__card_details">
            <div className="lendsqr__main__content__body__shortprofile__card__img">
              <img src={user2} alt="loan" />
            </div>
            <div className="lendsqr__main__content__body__shortprofile__card__title">
              <span>Loan Balance</span>
            </div>
            <div className="lendsqr__main__content__body__shortprofile__card__amount">
              <span>2,453</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DashShortProfile;
