
function AlertComponent({ status, message }: any)
{
  return (
    <div>
      {/* create alert component */}
      <div className="lendsqr__alert">
        <div className="lendsqr__alert__status">
          <span className={"lendsqr__alert__" + message}>{status}</span>
        </div>
      </div>

    </div>
  );
}

export default AlertComponent;
