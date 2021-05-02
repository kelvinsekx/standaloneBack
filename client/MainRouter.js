import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Users from "./user/Users";
import Signup from "./user/Signup";
import SignIn from "./auth/Signin";
import Profile from "./user/Profile";
import EditProfile from "./user/EditProfile"

import NewsFeed from "./post/Newsfeed";

import PrivateRoute from "./auth/PrivateRoute";
import Menu from "./core/Menu"


const MainRouter = () => (
  <div>
	<Menu />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/feeds">
        <NewsFeed />
      </Route>
      <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
      <Route exact path="/user/:userId" component={Profile} />
    </Switch>
  </div>
);

export default MainRouter;
