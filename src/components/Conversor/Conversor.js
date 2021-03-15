/* eslint-disable */

import React, { useState, useEffect } from 'react';
import './styles.css';


export default ({ moedaA, moedaB }) => {
  const [curA, setCurA] = useState('');
  const [curB, setCurB] = useState('');
  const [curAValue, setcurAValue] = useState(0);
  const [curBValue, setcurBValue] = useState(0);

  useEffect(() => {
    setCurA(moedaA);
    setCurB(moedaB)
  }, [])

 function converter() {
    console.log('linkou')
  }

  return (
    <div className='container'>
      <h1>{curA} para {curB}</h1>
      <input type="number" onChange={(e) => setcurAValue(e.target.value)}/>
      <button type='button' onClick={() => converter()}>Converter</button>
      <h2>valor convertido</h2>
    </div>
  )
}