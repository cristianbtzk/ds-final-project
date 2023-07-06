import React from "react";
import { Route, Routes as R, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Listar from "../pages/Pedidos/Listar";
import Adicionar from "../pages/Pedidos/Adicionar";
import ListarItens from "../pages/Itens/Listar";
import AdicionarItens from "../pages/Itens/Adicionar";
import Signup from "../pages/Signup";
const Routes = () => {
  return (
    <BrowserRouter>
      <R>
        <Route element={<Home />} path="/" exact />
        <Route element={<Signup />} path="/signup" exact />
        <Route element={<Listar />} path="/orders/all" exact />
        <Route element={<Adicionar />} path="/orders/add" exact />
        <Route element={<ListarItens />} path="/itens/all" exact />
        <Route element={<AdicionarItens />} path="/itens/add" exact />
      </R>
    </BrowserRouter>
  )
}

export default Routes;