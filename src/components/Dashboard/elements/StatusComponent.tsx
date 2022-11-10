
function StatusComponent({ status, message }: any)
{
  return (
    <div>
      {/* create alert component */}
      <div className="lendsqr__alert">
        <div className="lendsqr__alert__status">
          <span className={`lendsqr__alert__${status}`}>{message}</span>
        </div>
      </div>

    </div>
  );
}

export default StatusComponent;
