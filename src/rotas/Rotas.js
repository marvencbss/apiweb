import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../paginas/Home";
import Cadastro from "../paginas/Cadastro";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact Component={Home}/>
                <Route element={<Cadastro />} path="/cadastro" exact Component={Cadastro}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;