import { Route, Switch } from "react-router-dom";
import Providers from "../contexts";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import RegisterLogin from "../pages/Register-Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Providers>
          <Home />
        </Providers>
      </Route>
      <Route path="/login">
        <RegisterLogin />
      </Route>
      <Route path="/dashboard">
        <Providers>
          <Dashboard />
        </Providers>
      </Route>
      <Route path="/perfil">
        <Perfil />
      </Route>
    </Switch>
  );
};

export default Routes;
