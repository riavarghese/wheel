import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Sidebar from "components/Common/Sidebar";
import { DashboardProvider } from "contexts/dashboard";

import Profile from "./Account/Profile";
import Contacts from "./Contacts";
import Notes from "./Notes";
import Settings from "./Settings";

const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <DashboardProvider>
        <Switch>
          <Route path="/notes" component={Notes} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/my/profile" component={Profile} />
          <Redirect from="/" to="/notes" />
        </Switch>
      </DashboardProvider>
    </div>
  );
};

export default Home;
