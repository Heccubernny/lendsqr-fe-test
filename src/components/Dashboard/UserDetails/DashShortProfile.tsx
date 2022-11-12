import { star_fill, star_outline } from '../../../assets/images';
import { UsersProps } from '../../../features/interface/IUser';
import '../../../styles/Dashboard/dashuserdetails.scss';


interface Props
{
  user: UsersProps | undefined;
}
function DashShortProfile({ user }: Props)
{
  return (
    <div className="lendsqr__main__content__body__shortprofile__card">
      <div className="lendsqr__main__content__body__shortprofile__card_details_top">
        <div className="lendsqr__main__content__body__shortprofile__card_details_left">
          <div className="user_image">
            {user?.profile.avatar ? (
              < img src={user?.profile.avatar} style={{ width: "10rem", height: "10rem", borderRadius: "50%" }} alt="avatar" />
            ) : (<img src={""} alt="profile" />)}
          </div>

          <div className="user_name__account_number">
            <h3>{`${user?.profile.firstName} ${user?.profile.lastName}`}</h3>
            <p>{user?.accountNumber}</p>
          </div>
        </div>
        <div className="vertical_line" />

        <div className="lendsqr__main__content__body__shortprofile__card_details_middle">
          <h4>User's Tier</h4>
          {/* TODO::get the star icon svg and import it here */}
          <img src={star_fill} alt="ratings" />
          <img src={star_outline} alt="ratings" />
          <img src={star_outline} alt="ratings" />


        </div>
        <div className="vertical_line" />

        <div className="lendsqr__main__content__body__shortprofile__card_details_right">
          <h3>₦
            {user?.accountBalance.toLocaleString("en-US", {
              style: "currency", currency: "NGN"
            })}</h3>
          <p>{user?.accountNumber}</p>
        </div>
      </div>


      <div className="lendsqr__main__content__body__shortprofile__card_details_nav">
        <p className="user_nav_active">General Details</p>
        <p>Documents</p>
        <p>Bank Details</p>
        <p>Loans</p>
        <p>Savings</p>
        <p>App and System</p>
      </div>
    </div>

  );
}

export default DashShortProfile;
