import { optionModalListRoutes } from '../../../features/utils/routes';
import OptionModalList from './OptionModalList';

const OptionModal = ({ show, id }: any) =>
{
  return (
    <>
      {show ? (
        <div className="modal__wrapper">
          {optionModalListRoutes.map((route, index) => (
            <OptionModalList
              key={index}
              id={id}
              path={route.path}
              name={route.name}
              icon={route.icon}
            />
          ))}
        </div>
      ) : null}
    </>
  )
}
export default OptionModal;
