// import { useState } from 'react';
import StatusComponent from './StatusComponent';
// const [ message, setMessage ] = useState()



export const ALERT_STATUS = {
  inactive: (message: string) => <StatusComponent status="inactive" message={message} />,
  blacklisted: (message: string) => <StatusComponent status="blacklisted" message={message} />,
  active: (message: string) => <StatusComponent status="active" message={message} />,
  pending: (message: string) => <StatusComponent status="pending" message={message} />
}
