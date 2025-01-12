import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'; // Correct import
import NavBar from './components/NavBar';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar></NavBar>
    <div className="my-20"><Outlet /></div>
    
    </>
  );
}

export default App;
