import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Demo from "./Pages/Demo/Demo";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import {
  DEMO_PAGE_ROUTE,
  SIGNIN_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
} from "./routes";

// const M = require("materialize-css");

const App = () => {
  // useEffect(() => {
  //   // M.Sidenav.init();
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={DEMO_PAGE_ROUTE} component={Demo} />
          <Route path={SIGNIN_PAGE_ROUTE} component={SignIn} />
          <Route path={SIGNUP_PAGE_ROUTE} component={SignUp} />
          <Route exact path="/">
            <Redirect to={DEMO_PAGE_ROUTE} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
