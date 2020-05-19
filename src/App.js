import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Page/Home";
import Message from "./Page/Message";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route
            path="/pesanlebaranuntuk/:guest"
            exact
            strict
            component={Message}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
