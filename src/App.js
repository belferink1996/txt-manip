import React, { useState, useEffect } from 'react';
import logo from './media/logo.svg';
import './style/style.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    let str = '';

    for (let i = input.length - 1; i >= 0; i--) {
      str += input.charAt(i);
    }

    setOutput(str);
  }, [input]);

  return (
    <div className='app'>
      <img src={logo} alt='logo' />
      <input
        className='input'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input className='output' value={output} readOnly />
      <footer>
        Developed for{' '}
        <a href='http://orandt.co.il' target='blank'>
          OR&T
        </a>{' '}
        &copy; 2020
      </footer>
    </div>
  );
}

export default App;
