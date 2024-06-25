import { useState } from 'react';
import Banner from './components/banner';
import Formulario from './components/Form';
import Team from './components/Team';

function App(props) {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82cffa',
      secondaryColor: '#e8f8ff',
    },
    {
      name: 'Data Sciemce',
      primaryColor: '#a6d157',
      secondaryColor: '#f0f8e2',
    }, {
      name: 'Devops',
      primaryColor: '#e06b69',
      secondaryColor: '#fde7e8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#db6ebf',
      secondaryColor: '#fae9f5',
    },
    {
      name: 'Mobile',
      primaryColor: '#ffba05',
      secondaryColor: '#fff5d9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#ff8a29',
      secondaryColor: '#ffeedf',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {

    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={teams.map(teams => teams.name)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {teams.map(team => <Team
        key={team.name} 
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === team.name)}
        />)}
    </div>
  );
}

export default App;
