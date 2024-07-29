import logo from '../logo.svg';
import '../App.css';
import Header from '../Header';
import Footer from '../Footer';

function Home() {
  return (
    <div className="App">
      {/*importar header*/}
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/*importar Footer*/}
      <Footer/>

    </div>
  );
}

export default Home;