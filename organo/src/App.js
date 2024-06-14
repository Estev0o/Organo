import Banner from './components/banner';
import TextForm from './components/textForm';

function App() {
  return (
    <div className="App">
      <Banner/>
      <TextForm label="Nome" placeholder="Digite seu nome"/>
      <TextForm label="Cargo" placeholder="Digite seu cargo"/>
      <TextForm label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
