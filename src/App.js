import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Page404 from './pages/Page404';
import About from './pages/About';
import Home from './pages/Home';
import { useState } from 'react';
import IsLogged from './components/Nav/IsLogged';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/about'
          element={
            <IsLogged isLogged={isLogged}>
              <About />
              <Navigate to='/login' />
            </IsLogged>
          }
        />
        <Route
          path='/signup'
          element={
            <IsLogged isLogged={isLogged}>
              <Navigate to='/' />
              <SignUp />
            </IsLogged>
          }
        />
        <Route path='/login' element={<LogIn />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
