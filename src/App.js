import Conversor from './components/Conversor/Conversor';

import './global.css';

function App() {
  return (
    <div className='container'>
      <h1>Conversor</h1>
      <div className='components'>
        <Conversor moedaA='USD' moedaB='BRL' />
        <Conversor moedaA='BRL' moedaB='CAD' />
        <Conversor moedaA='BRL' moedaB='USD' />
        <Conversor moedaA='CAD' moedaB='BRL' />
      </div>
    </div>
  );
}

export default App;
