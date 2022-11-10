import '../../../styles/Dashboard/dashuserdetails.scss';

import { UsersProps } from '../../../features/interface';

interface Props
{
  user: UsersProps | undefined;
}

function DashProfileDesc({ user }: Props)
{
  return (
    <section className="lendsqr__main__content___body__profile_desc">
      {/* start content 1 */}
      <div className="lendsqr__main__content___body__profile_desc_box">
        <h4>Profile Description</h4>

        <div className="lendsqr__main__content___body__profile_desc_content">

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>full name</span>
            <p>{`${user?.profile.firstName} ${user?.profile.lastName}`}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>phone number</span>
            <p>{user?.profile.phoneNumber}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>email</span>
            <p>{user?.email}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>bvn</span>
            <p>{user?.profile.bvn}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>gender</span>
            <p>{user?.profile.gender}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>marital status</span>
            <p>Single</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>children</span>
            <p>None</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>type of residence</span>
            <p>Apartment</p>
          </div>

          <hr />

        </div>
      </div>
      {/* end content 1 */}
      {/* start content 2 */}
      <div className="lendsqr__main__content___body__profile_desc_box">
        <h4>Education and Employment</h4>

        <div className="lendsqr__main__content___body__profile_desc_content">

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>level of education</span>
            <p>{user?.education.level}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>employment status</span>
            <p>{user?.education.employmentStatus}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>sector of employment</span>
            <p>{user?.education.sector}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>duration of employment</span>
            <p>{user?.education.duration}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>office email</span>
            <p>{user?.education.officeEmail}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>monthly income</span>
            <p>
              {user?.education.monthlyIncome.reduce((a, b) => `${a} ${b}`, "")}
            </p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>loan repayment</span>
            <p>{user?.education.loanRepayment}</p>
          </div>

          <hr />
        </div>
      </div>
      {/* end content 2 */}

      {/* start content 3 */}
      <div className="lendsqr__main__content___body__profile_desc_box">
        <h4>Socials</h4>

        <div className="lendsqr__main__content___body__profile_desc_content">

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>twitter</span>
            <p>{user?.socials.twitter}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span> Facebook</span>
            <p>{user?.socials.facebook}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>instagram</span>
            <p>{user?.socials.instagram}</p>
          </div>
          <hr />

        </div>
      </div>
      {/* end content 3 */}

      {/* start content 4 */}
      <div className="lendsqr__main__content___body__profile_desc_box">
        <h4>Guarantor</h4>

        <div className="lendsqr__main__content___body__profile_desc_content">

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>full name</span>
            <p>{`${user?.guarantor.firstName} ${user?.guarantor.lastName}`}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>phone number</span>
            <p>{user?.guarantor.phoneNumber}</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>email address</span>
            <p>debby@gmail.com</p>
          </div>

          <div className="lendsqr__main__content___body__profile_desc_content__item">
            <span>relationship</span>
            <p>Sister</p>
          </div>

        </div>
      </div>
      {/* end content 4*/}


    </section>
  );
}

export default DashProfileDesc;
