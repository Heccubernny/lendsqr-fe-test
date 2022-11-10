import '../../../styles/Dashboard/TableSkeleton.scss';

function TableSkeleton({ type }: any)
{
  const classes = `skeleton ${type}`
  return (
    <div className={classes}>

      {/* <div className={classes}></div> */}
      <div className="shimmer-wrapper">
        <div className="shimmer">
        </div>
      </div>
    </div>
  );
}

export default TableSkeleton;
