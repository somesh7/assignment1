import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import "./index.css";

const App = () => {
    return( <>
   
    <BrowserRouter>
    <Navbar />
    
    
    <Switch>
        <Route exact  path="/" component={Home} /> 
        <Route exact path="/favorites"  component={Favorites} />
        <Redirect to="/" />
    </Switch>
    </BrowserRouter>

    
    </>
    );
}
export default App;