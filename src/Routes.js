import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import DetailsArtigo from './Pages/DetalhesArtigos'
import Login from './Pages/Login'
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch >
                {/* <Route path="/login" exact component={Login} />
                <Route path="/cadastro" exact component={Cadastro} />

                <PermissionUser path="/" exact component={Login} />
                <PermissionUser path="/home" exact component={Home} /> */}
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/artigo/:id_artigo" exact component={DetailsArtigo} />
            </Switch>
        </BrowserRouter>
    )
}