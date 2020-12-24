import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Demo from "./Pages/Demo/Demo";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

const M = require("materialize-css");

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/demo" component={Demo} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route exact path="/">
            <Redirect to="/demo" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
