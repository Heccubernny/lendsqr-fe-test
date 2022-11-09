import './App.scss';

import { Link, Route, Routes } from 'react-router-dom';
import { Dashboard, Login, UserDetail } from './pages/';
function App()
{

  return (
    <div className="app">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />



        <Route path='/users/details/:id' element={<UserDetail />} />


      </Routes>

      Home Page

      < Link to="/login" > Login Here</Link >
      <Link to="/dashboard/users">Visit our Users Dashboard</Link>
    </div >
  )
}

export default App
