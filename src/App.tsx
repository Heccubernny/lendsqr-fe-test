import './App.scss';

import { Link, Route, Routes } from 'react-router-dom';
import StatusComponent from './components/Dashboard/elements/StatusComponent';
import { Dashboard, Login, UserDetail } from './pages/';
function App()
{

  return (
    <div className="app">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard/users/:id' element={<UserDetail />} />
        <Route path='/blacklist/:id' element={<StatusComponent status="blacklisted" message="Blacklisted successfully" />} />
      </Routes>
      <div>
        Home Page
        < Link to="/login" > Login Here</Link >
        <Link to="/dashboard/users">Visit our Users Dashboard</Link>
      </div >
    </div>
  )
}

export default App
