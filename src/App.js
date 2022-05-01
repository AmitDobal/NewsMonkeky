import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="science"
                pageSize={6}
                country="us"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            element={
              <News
                key="business"
                pageSize={6}
                country="us"
                category="business"
              />
            }
            path="/business"
          ></Route>
          <Route
            exact
            element={
              <News
                key="entertainment"
                pageSize={6}
                country="us"
                category="entertainment"
              />
            }
            path="/entertainment"
          ></Route>
          <Route
            exact
            element={
              <News
                key="general"
                pageSize={6}
                country="us"
                category="general"
              />
            }
            path="/general"
          ></Route>
          <Route
            exact
            element={
              <News key="health" pageSize={6} country="us" category="health" />
            }
            path="/health"
          ></Route>
          <Route
            exact
            element={
              <News
                key="science"
                pageSize={6}
                country="us"
                category="science"
              />
            }
            path="/science"
          ></Route>
          <Route
            exact
            element={
              <News key="sports" pageSize={6} country="us" category="sports" />
            }
            path="/sports"
          ></Route>
          <Route
            exact
            element={
              <News
                key="technology"
                pageSize={6}
                country="us"
                category="technology"
              />
            }
            path="/technology"
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
