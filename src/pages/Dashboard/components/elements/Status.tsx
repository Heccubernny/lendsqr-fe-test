// import { useState } from 'react';
import AlertComponent from './AlertComponent';
// const [ message, setMessage ] = useState()



export const ALERT_STATUS = {
  inactive: (message: string) => <AlertComponent status="inactive" message={message} />,
  blacklisted: (message: string) => <AlertComponent status="blacklisted" message={message} />,
  active: (message: string) => <AlertComponent status="active" message={message} />,
  pending: (message: string) => <AlertComponent status="pending" message={message} />
}
