/* eslint-disable */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';
const APIKEY = '[CASO A API TENHA UMA KEY]';

import './styles.css';

export default ({ moedaA, moedaB }) => {
  const [curA, setCurA] = useState('');
  const [curB, setCurB] = useState('');
  const [curAValue, setcurAValue] = useState(0);
  const [curBValue, setcurBValue] = useState(0);

  useEffect(() => {
    setCurA(moedaA);
    setCurB(moedaB);
    }, []);

 async function converter() {
   const de_para = `${moedaA}_${moedaB}`;
   await api.get(`api/v7/convert?q=${de_para}&compact=ultra&apiKey=${APIKEY}`).then(res => {
     return res
   })
   .then((res) => {
    const cot = res.data[de_para];
    const moedaBValue = (parseFloat(curAValue) * cot).toFixed(2);
    setcurBValue(moedaBValue);
   })
  };

  return (
    <div className='container'>
      <h1>{curA} para {curB}</h1>
      <input type="number" onChange={(e) => setcurAValue(e.target.value)}/>
      <button type='button' onClick={() => converter()}>Converter</button>
      <h2>{curBValue}</h2>
    </div>
  )
}