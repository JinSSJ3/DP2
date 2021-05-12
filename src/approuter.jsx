import React from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from "config";

const AppRouter = (props) => {
  return (
    <Router basename={`${config.publicPath}`}>
      <Route render={(props) => <AppContainer {...props} />} />
    </Router>
  );
};

export default AppRouter;
