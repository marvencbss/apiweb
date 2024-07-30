import Header from '../Header'
import '../App.css';
import BotaoVoltar from '../componentes/BotaoVoltar';
import { useState } from 'react';

function Cadastro() {

    const [campos, setCampos] = useState({
        nome: '',
        idade: 0,
        cidade: '',
    });

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
    }

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

                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>

            <BotaoVoltar></BotaoVoltar>
        </div>
    )
}

export default Cadastro;