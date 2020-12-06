import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [tokendata, setTokenData] = useState(false);

  const toggleBtn = (e) => {
    if(e === 'logout') {
      localStorage.clear();
      setTokenData(false);
    } else {
      if(localStorage.getItem('authToken')) {
        setTokenData(true);
      }
    }
  }

  return (
    <div className="App">
      {!tokendata && <Login toggleBtn = {toggleBtn}/>}
      {tokendata && <Logout toggleBtn = {toggleBtn} />}
    </div>
  );
}

export default App;
