import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import ErrorBoundaries from "./component/ErrorBoundaries";


export default class App extends Component {
  pageSize = 6;
  APIKey = process.env.REACT_APP_API_KEY;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <ErrorBoundaries>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />

          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  APIKey={this.APIKey}
                  key="/"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"general"}
                  title={"General"}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  APIKey={this.APIKey}
                  key="general"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"general"}
                  title={"General"}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  APIKey={this.APIKey}
                  key="business"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"business"}
                  title={"Business"}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  APIKey={this.APIKey}
                  key="entartainment"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"entertainment"}
                  title={"Entertainment"}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  APIKey={this.APIKey}
                  key="health"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"health"}
                  title={"Health"}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  APIKey={this.APIKey}
                  key="science"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"science"}
                  title={"Science"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  APIKey={this.APIKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"sports"}
                  title={"Sports"}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  APIKey={this.APIKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"technology"}
                  title={"Technology"}
                />
              }
            />
          </Routes>
        </Router>
        </ErrorBoundaries>
      </div>
    );
  }
}
