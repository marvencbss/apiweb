import logo from '../logo.svg';
import '../App.css';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      {/*importar header*/}

      <Header title="Parametro de titulo"/>

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>Práticas avançadas de desenvolvimento web</p>

        <Link to="/cadastro">Acessar cadastro</Link>
        
      </header>

      {/*importar Footer*/}
      <Footer/>

    </div>
  );
}

export default Home;