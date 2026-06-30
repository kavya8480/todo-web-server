import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './compoments/dashboard';
import Profile from './pages/profile';
import AddTask from './pages/addTask';

function App() {

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
       <Dashboard/>
       {/* <AddTask/> */}
       {/* <Profile/> */}
    </div>
  );
}

export default App;
