/* eslint-disable */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';
const APIKEY = '09b2524bfe2fe175b3c8';

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

  function converter() {
   const de_para = `${moedaA}_${moedaB}`;
   api.get(`api/v7/convert?q=${de_para}&compact=ultra&apiKey=${APIKEY}`).then(res => {
     return res
   })
   .then((res) => {
    const cot = res.data[de_para];
    const moedaBValue = (Number(curAValue) * cot).toFixed(2);
    setcurBValue(moedaBValue);
   })
  };

  return (
      <div className='conversorContainer'>
        <h1>{curA} para {curB}</h1>
        <input placeholder='Value:' type="number" onChange={(e) => setcurAValue(e.target.value)}/>
        <button type='button' onClick={() => converter()}>Converter</button>
        <h2>
          {
            `Valor em ${moedaB} é: ${curBValue}`
          }
        </h2>
    </div>
  )
}