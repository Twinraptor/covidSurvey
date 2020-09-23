import React from "react";
import Main from "./views/Main";
import { Router } from "@reach/router";
import Detail from "./views/Detail";

function App() {
  return (
    <div className='App'>
      <Router>
        <Detail path='user/:id' />
        <Main path='/' />
      </Router>
    </div>
  );
}

export default App;
