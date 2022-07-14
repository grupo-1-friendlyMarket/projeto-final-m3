import { Route, Switch } from "react-router-dom";
import Providers from "../contexts";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import { AboutUs } from "../pages/AboutUs";
import { LoginOrRegister } from "../pages/Register-Login";
import { useEffect, useState } from "react";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@Market:token");

    if (token) {
      return setAuthenticated(true);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Providers>
          <Home />
        </Providers>
      </Route>
      <Route path="/aboutUs">
        <AboutUs />
      </Route>
      <Route path="/login">
        <LoginOrRegister
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Providers>
          <Dashboard />
        </Providers>
      </Route>
      <Route path="/perfil">
        <Providers>
          <Perfil authenticated={authenticated} />
        </Providers>
      </Route>
    </Switch>
  );
};

export default Routes;
