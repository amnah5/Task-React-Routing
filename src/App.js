import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import Detail from "./components/Detail";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/product/:productslug">
          <Detail />
        </Route>
        <Route exact path="/ProductList">
          <ProductList />
          <Helmet>
            <title>ProductList</title>
            <meta name="ProductList" content="Helmet application" />
          </Helmet>
        </Route>
        <Route exact path="/">
          <Home />
          <Helmet>
            <title>Home</title>
            <meta name="Home" content="Helmet application" />
          </Helmet>
        </Route>
      </Switch>
      <Detail />
    </div>
  );
}

export default App;
