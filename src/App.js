import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Pages/NavBar/Nav";
import loader from "./loader.gif";
import "./Main.css";
import styled from "styled-components";
const Teams = lazy(() => import("./Pages/Team/Team"));
const Home = lazy(() => import("./Pages/Home/Home"));
const EventMain = lazy(() => import("./Pages/Events"));

const Address = styled.div`
  position: relative;
  color: grey;
  background-color: #f2f2f2;
  padding: 2% 10%;
  font-size: 20px;
  margin-top: 5vh;
  & > h4 {
    color: black;
    font-size: 24px;
  }
`;

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/events" component={EventMain} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
