import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import App from '../App'
import Card from '../screen/Card'
import Login from '../screen/Login'


function Routes() {
    return(
        <>
            <BrowserRouter>
                <Route exact component={Login} path="/"/>
                <Route component={Card} path="/dev/:d"/>
            </BrowserRouter>
        </>
    )
}
export default Routes
