import { useState } from 'react';
import Banner from './components/banner';
import Formulario from './components/Form';

function App(props) {

  const [colaboradores,  setColaboradores] = useState([])
      const aoNovoColaboradorAdicionado = (colaborador) => {
     console.log(colaborador)
     setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
