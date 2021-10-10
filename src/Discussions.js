import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink,
  useRouteMatch,
  Route,
} from "react-router-dom";
import DiscussionThread from "./DiscussionThread";
import './index.css'

const Discussions = () => {
  const { url, path } = useRouteMatch();

  return (
    <center>
      <Router>
        <center>
          <ul>
            <li>
              <NavLink to={`${url}/podcasts`} activeClassName="nav-link">Podcasts</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/novels`} activeClassName="nav-link">Novels</NavLink>
            </li>
          </ul>
        </center>
        <div>
          <Switch>
            <Route exact path={path}>
                 <h3>Select Topic of discussion</h3>
            </Route>
            <Route path={`${path}/:discussionTopic`}>
              <DiscussionThread />
            </Route>
          </Switch>
        </div>
      </Router>
    </center>
  );
};

export default Discussions;
