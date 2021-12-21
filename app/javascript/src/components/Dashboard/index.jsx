import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Sidebar from "components/Common/Sidebar";
import { NoteProvider } from "contexts/note";

import Profile from "./Account/Profile";
import Contacts from "./Contacts";
import Notes from "./Notes";
import Settings from "./Settings";

const Home = () => {
  const NotesComponent = () => (
    <NoteProvider>
      <Notes />
    </NoteProvider>
  );
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <Switch>
        <Route path="/notes" render={NotesComponent} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/my/profile" component={Profile} />
        <Redirect from="/" to="/notes" />
      </Switch>
    </div>
  );
};

export default Home;
