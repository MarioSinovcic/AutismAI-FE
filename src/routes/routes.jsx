import React from "react";
import { Route, Switch } from "react-router-dom";

import FrontPage from "../pages/FrontPage";
import DashboardPage from "../pages/DashboardPage";
import QuizPage from "../pages/QuizPage";
import AdminPage from "../pages/AdminPage";

// This component allows for easy additions for additional pages
const paths = {
  FRONTPAGE: "/",
  DASHBOARDPAGE: "/dashboard",
  QUIZPAGE: "/quiz",
  ADMINPAGE: "/admin"
};

const routes = (
  <Switch>
    <Route exact path={paths.FRONTPAGE} component={FrontPage} />
    <Route exact path={paths.DASHBOARDPAGE} component={DashboardPage} />
    <Route exact path={paths.QUIZPAGE} component={QuizPage} />
    <Route exact path={paths.ADMINPAGE} component={AdminPage} />
  </Switch>
);

export default routes;
