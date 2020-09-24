import React from "react";
import UserSignIn from "./views/UserSignIn";
import { Router } from "@reach/router";
import Detail from "./views/Detail";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Detail path='user/:id' />
        <UserSignIn path='/' />
      </Router>
    </div>
  );
}

export default App;
