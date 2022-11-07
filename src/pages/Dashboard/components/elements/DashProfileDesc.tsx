import '../../styles/dashuserdetails.scss';

function DashProfileDesc()
{
  return (
    <section className="lendsqr__main__content___body__profile_desc">
      <div className="lendsqr__main__content___body__profile_desc_content">
        <div className="lendsqr__main__content___body__profile_desc_content__title">
          <h3>Profile Description</h3>

          <div className="lendsqr__main__content___body__profile_desc_content__title__edit">
            <button className="lendsqr__main__content___body__profile_desc_content__title__edit__btn">
              <i className="fas fa-edit"></i>
            </button>

            <button className="lendsqr__main__content___body__profile_desc_content__title__edit__btn">
              <i className="fas fa-trash"></i>
            </button>

            <button className="lendsqr__main__content___body__profile_desc_content__title__edit__btn">
              <i className="fas fa-plus"></i>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default DashProfileDesc;
