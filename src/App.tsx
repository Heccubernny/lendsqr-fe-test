import './App.scss';

import { Link } from 'react-router-dom';

function App()
{

  return (
    <>
      {/* <Routes>
          <Route path="/" element={<Login />} /> */}

      {/* <Route path='/dashboard'>
            <Route path="/" element={<div>Dashboard</div>} />

            <Route path='/users'>
              <Route path='/show_filter' element={<div>My guy shwow filter</div>} />
              <Route path='/details' element={<div> Details bobo </div>} />
            </Route>

          </Route> */}
      {/* </Routes> */}
      Home Page

      <Link to="/login">Login Here</Link>
      <Link to="/dashboard">Visit our Dashboard</Link>
    </>
  )
}

export default App