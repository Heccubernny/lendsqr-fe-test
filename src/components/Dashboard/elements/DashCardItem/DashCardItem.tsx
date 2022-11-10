import './DashCardItem.scss';

interface Props
{
  icon: string;
  title: string;
  amount: string;
}

function DashCardItem({ icon, title, amount }: Props)
{
  return (
    <div className="lendsqr__main__content__body__card">
      <div className="lendsqr__main__content__body__card_details">
        <div className="lendsqr__main__content__body__card__img">
          <img src={icon} alt="loan" />
        </div>
        <div className="lendsqr__main__content__body__card__title">
          <span>{title}</span>
        </div>
        <div className="lendsqr__main__content__body__card__amount">
          <span>{amount}</span>
        </div>
      </div>
    </div>
  );
}

export default DashCardItem;
