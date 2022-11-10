import './App.scss';

import { Route, Routes } from 'react-router-dom';
import StatusComponent from './components/Dashboard/elements/StatusComponent';
import { Dashboard, Login, UserDetail } from './pages/';
function App()
{

  return (
    <div className="app">


      <div><Routes>
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/dashboard/users/" element={<Dashboard />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path='/dashboard/users/:id/' element={<UserDetail />} />
        <Route path='/dashboard/users/:id/blacklist' element={<StatusComponent status="blacklisted" message="Blacklisted successfully" />} />
      </Routes></div>

    </div>
  )
}

export default App
