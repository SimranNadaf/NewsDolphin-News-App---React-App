import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <News  key="/" pageSize={this.pageSize} country={"in"} category={"general"} title={"General"}/>
              }
            />
            <Route
              path="/general"
              element={
                <News  key="general" pageSize={this.pageSize} country={"in"} category={"general"} title={"General"}/>
              }
            />
            <Route
              path="/business"
              element={
                <News  key="business" pageSize={this.pageSize} country={"in"} category={"business"} title={"Business"}/>
              }
            />
            <Route
              path="/entertainment"
              element={
                <News  key="entartainment" pageSize={this.pageSize} country={"in"} category={"entertainment"} title={"Entertainment"}/>
              }
            />
            <Route
              path="/health"
              element={<News  key="health" pageSize={this.pageSize} country={"in"} category={"health"} title={"Health"}/>
            }
            />
            <Route
              path="/science"
              element={
                <News  key="science" pageSize={this.pageSize} country={"in"} category={"science"} title={"Science"}/>
              }
            />
            <Route
              path="/sports"
              element={<News  key="sports" pageSize={this.pageSize} country={"in"} category={"sports"} title={"Sports"}/>}
            />
            <Route
              path="/technology"
              element={
                <News  key="technology" pageSize={this.pageSize} country={"in"} category={"technology"} title={"Technology"}/>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
