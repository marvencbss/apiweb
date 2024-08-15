import '../App.css';
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div className="App">
      {/* Importamos o componente Header criado como HTML */}
      <Header title="Programa 3 Mil Talentos" />

      <header className="App-header">

        <p>Praticas avançadas em Desenvolvimento Web.</p>

        <Link to="/cadastro">Acessar cadastro</Link>
        <Link to="/ListaRegistros">Listagem de cadastro</Link>
        <Link to="/upload">Upload de arquivos</Link>

      </header>

       {/* Importamos o componente Footer  criado como HTML */}
      <Footer/>

    </div>
  );
}

export default Home;