import { Route, Switch } from "react-router-dom";
import Providers from "../contexts";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Login from "../pages/Register-Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/dashboard">
        <Providers>
          <Dashboard />
        </Providers>
      </Route>
      <Route exact path="/perfil">
        <Perfil />
      </Route>
    </Switch>
  );
};

export default Routes;
