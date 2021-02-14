import "./App.css";
import Header from "./components/Header";
import Cart from "./containers/Cart";
import Photos from "./containers/Photos";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
