import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import ErrorBoundaries from "./component/ErrorBoundaries";

const App = () => {
  const pageSize = 6;
  const APIKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <ErrorBoundaries>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />

          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  APIKey={APIKey}
                  key="/"
                  pageSize={pageSize}
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
                  setProgress={setProgress}
                  APIKey={APIKey}
                  key="general"
                  pageSize={pageSize}
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
                  setProgress={setProgress}
                  APIKey={APIKey}
                  key="business"
                  pageSize={pageSize}
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
                  setProgress={setProgress}
                  APIKey={APIKey}
                  key="entartainment"
                  pageSize={pageSize}
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
                  setProgress={setProgress}
                  APIKey={APIKey}
                  key="health"
                  pageSize={pageSize}
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
                  setProgress={setProgress}
                  APIKey={APIKey}
                  key="science"
                  pageSize={pageSize}
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
                  setProgress={setProgress}
                  APIKey={APIKey}
                  key="sports"
                  pageSize={pageSize}
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
                  setProgress={setProgress}
                  APIKey={APIKey}
                  key="technology"
                  pageSize={pageSize}
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
};
export default App;
