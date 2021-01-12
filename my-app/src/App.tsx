import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./component/organisms/navBar/naBar";
import Home from "./component/pages/home/home";
import { PicModal } from "./component/pages/picModal/picModal";
import { connect } from "react-redux";
import "./styles/App.scss";
import { state } from "./store/reducers/rootReducer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/t/:ID" component={PicModal} />
      </Switch>
    </>
  );
}

const mapStateToProps = (state: state) => {
  console.log(state);
  return {
    state,
  };
};

export default connect(mapStateToProps)(App);
