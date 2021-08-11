import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About"
import Navigation from './routes/Navigation';
import Detail from "./routes/Detail"
import Way from "./routes/Way"
import Main from "./routes/Main"
import Table from "./components/table"

const App = () => {
  return (
      <HashRouter>

        <Navigation/>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/table" component={Table}/>
        <Route path="/menu-detail" component={Detail}/>
        <Route path="/menu-way" component={Way}/>
        {/* <Route path="/Set" component={Set}/> */}
        <Route path="/main" component={Main}/>





      </HashRouter>
  );
};

export default App;