import Header from "../Header";
import '../App.css';
import BotaoVoltar from '../componentes/BotaoVoltar';

function Cadastro() {
    return (
        <div className="App">
            <Header title="Formulario de cadastro" />

            <form>
                <fieldset>
                    <legend>
                        <h2>
                            Dados de cadastro
                        </h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="nome" id="nome"/>
                        </label>
                    </div>

                    <div>
                        <label>Nome:
                            <input type="number" name="idade" id="idade"/>
                        </label>
                    </div>

                    <div>
                        <label>Cidade:
                            <input type="text" name="cidade" id="cidade"/>
                        </label>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Cadastro;