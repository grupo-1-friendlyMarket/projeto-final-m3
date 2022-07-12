import { Route, Switch } from "react-router-dom";
import { Filters } from "../components/Filters";
import Providers from "../contexts";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import { AboutUs } from "../pages/AboutUs";
import {LoginOrRegister} from "../pages/Register-Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Providers>
          <Filters/>
          <Home/>
        </Providers>
      </Route>
      <Route path="/aboutUs">
        <AboutUs/>
      </Route>
      <Route path="/login">
        <LoginOrRegister />
      </Route>
      <Route path="/dashboard">
        <Providers>
          <Dashboard />
          <Filters/>
        </Providers>
      </Route>
      <Route path="/perfil">
        <Perfil />
      </Route>
    </Switch>
  );
};

export default Routes;
