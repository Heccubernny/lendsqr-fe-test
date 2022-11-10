import { headTableRowRoutes } from '../../../../features/utils/routes';
// interface Props
// {
//   name: string;
//   icon: string;
// }
function HeadTableRow()
{


  return (
    <div>

      {headTableRowRoutes.map((route, index) => (
        <th className="lendsqr__main__content___body__table__head">
          <span>{route.name}</span>
          <span className="lendsqr__main__content___body__table__head_row__filter">
            <img src={route.icon} />
          </span>
        </th>
      ))}


    </div>
  );
}

export default HeadTableRow;
