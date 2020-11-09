import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Form, Navbar } from "../components";
import { createBrowserHistory } from "history";
import { Home } from "../pages";
import TutorialsList from "../pages/Tutorial-List.component/index";

const router = (props: any) => {
  return (
    <div>
      <Router history={createBrowserHistory()}>
        <Navbar />
        <Switch>
          <Route exact path="/postlist" component={TutorialsList} />
          <Route exact path="/add/:id" component={Form} />
          <Route exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default router;
