import React from 'react';
import './App.css';
import Logo from './logo2.png';

function App() {
  const handleClick = () => {
    alert('냥');
  };

  return (
    <div className='Login'>
      <div className='LoginBox'>
        <img src={Logo} width="289" height="159.45"/>
        <div className='inputs'>
          <input className='email' placeholder='  Usuário' type='text'/>
          <input className='password' placeholder='  Senha' type='password'/>
          <button className='button' onClick={handleClick}>ENTRAR</button>
        </div>
      </div>
    </div> 
     
  );
}

export default App;
