import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
import Home from '../paginas/Home';
import Cadastro from '../paginas/Cadastro';
import ListaRegistros from '../paginas/ListaRegistros';
 
function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact component={Home}/>
                <Route element={<Cadastro />} path="/cadastro" component={Cadastro} />
                <Route element={<ListaRegistros />} path="/lista" component={ListaRegistros} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;