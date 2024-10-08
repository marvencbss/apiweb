import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../paginas/Home';
import Cadastro from '../paginas/Cadastro';
import ListaRegistros from '../paginas/ListaRegistros';
import EditarRegistro from '../paginas/EditarRegistro';
import Upload from  '../componentes/Upload';
import Login from  '../paginas/login';
import { AuthProvider } from '../autenticacao/autenticacao';
import PrivateRoute from '../autenticacao/rotasPrivadas';
import EsqueciMinhaSenha from '../paginas/esqueciMinhaSenha';
import ResetarSenha from '../paginas/ResetarSenha';
import HomeMaterials from '../paginas/HomeMaterials';
 
function Rotas() {
    return (
        <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/esqueci-minha-senha" element={<EsqueciMinhaSenha />} />
                <Route path="/resetar-senha/:token" element={<ResetarSenha />} />
                <Route path="/homematerials" element={<HomeMaterials />} />
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                </Route>   

                <Route path="/ListaRegistros" element={<PrivateRoute />}>
                    <Route path="/ListaRegistros" element={<ListaRegistros />} />
                </Route>
                <Route path="/editar/:id" element={<PrivateRoute />}>
                    <Route path="/editar/:id" element={<EditarRegistro />} />
                </Route>
                <Route path="/upload" element={<PrivateRoute />}>
                    <Route path="/upload" element={<Upload />} />
                </Route>   
            </Routes>
        </BrowserRouter>
    </AuthProvider>
    )
}
export default Rotas;