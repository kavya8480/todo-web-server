import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './compoments/dashboard';
import LandingPage from './landing/landingpage';
import Register from './compoments/register';

function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Register onLoginClick={function (): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
       {/* <Dashboard/> */}
    </div>
  );
}

export default App;
