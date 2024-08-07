import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../paginas/Home';
import Cadastro from '../paginas/Cadastro';
import CadastroCEP from '../paginas/CadastroCEP';
import ListaRegistros from '../paginas/ListaRegistros';
import EditarRegistro from '../paginas/EditarRegistro';
import Upload from  '../componentes/Upload';
 
function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact component={Home}/>
                <Route element={<Cadastro />} path="/cadastro" component={Cadastro} />
                <Route element={<CadastroCEP />} path="/cadastrocep" component={CadastroCEP} />
                <Route element={<ListaRegistros />} path="/listaRegistros" component={ListaRegistros} />
                <Route element={<EditarRegistro />} path="/editar/:id" component={EditarRegistro} />
                <Route element={<Upload />} path="/upload" component={Upload} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;