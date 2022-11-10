import { Link } from 'react-router-dom';
interface Props
{
  id?: string;
  name: string;
  icon: string;
  path: string;
}
const OptionModalList: any = ({ name, path, icon, id }: Props) =>
{
  return (
    <Link to={`${path}${id}`} className="">
      <div className="">
        <img src={icon} alt="dashboard" />
      </div>
      <div className="">
        <span>{name}</span>
      </div>
    </Link>
  )
}

export default OptionModalList;
