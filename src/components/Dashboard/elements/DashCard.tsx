import { dashCardRoutes } from '../../../features/utils/routes';
import '../../../styles/Dashboard/dashcard.scss';
import DashCardItem from './DashCardItem/DashCardItem';

function DashCard()
{
    return (
        <section>
            <div className="lendsqr__main__content__body_cards">
                {dashCardRoutes.map((route, index) => (
                    <DashCardItem
                        key={index}
                        icon={route.icon}
                        title={route.title}
                        amount={route.amount}
                    />
                ))}
            </div>
        </section>
    );
}

export default DashCard;
