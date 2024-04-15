
import './App.css';
import { BrowserRouter as Router, Routes, Route,NavLink } from 'react-router-dom';
import { Home } from './component/Home';
import { Leads } from './component/Leads';
import { Sales } from './component/Sales';

function App() {
  return (
    <Router>
    <div className='flex'>
      {/* Sidebar */}
      <ul className='bg-blue-500 h-screen w-20'>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/leads" activeClassName="active">Leads</NavLink>
        </li>
        <li>
          <NavLink to="/sales" activeClassName="active">Sales</NavLink>
        </li>
      </ul>

      {/* Main Content */}
      <div className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
