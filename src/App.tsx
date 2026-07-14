import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './compoments/dashboard';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
       {/* <Dashboard/> */}
    </div>
  );
}

export default App;
