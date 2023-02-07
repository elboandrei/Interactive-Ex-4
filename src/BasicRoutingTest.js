import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/cnet307">CNET307</Link>
            </li>
            <li>
              <Link to="/comp308">COMP308</Link>
            </li>
            <li>
              <Link to="/comp313">COMP313</Link>
            </li>
            <li>
              <Link to="/comp321">COMP321</Link>
            </li>
            <li>
              <Link to="/comp313">COMP377</Link>
            </li>
          </ul>
        </nav>

        {/* <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />}>
            {" "}
          </Route>
          <Route path="/users" element={<Users />}>
            {" "}
          </Route>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/cnet307" element={<CNET307 />}>
            {" "}
          </Route>
          <Route path="/comp308" element={<COMP308 />}>
            {" "}
          </Route>
          <Route path="/comp313" element={<COMP313 />}>
            {" "}
          </Route>
          <Route path="/comp321" element={<COMP321 />}>
            {" "}
          </Route>
          <Route path="/comp377" element={<COMP377 />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function CNET307() {
  return <h2>IT Project Management</h2>;
}

function COMP308() {
  return <h2>Emerging Technologies</h2>;
}

function COMP313() {
  return <h2>Software- Project 2</h2>;
}

function COMP321() {
  return <h2>Enterprise System Integration</h2>;
}

function COMP377() {
  return <h2>AI for Software Developers</h2>;
}

//
export default App;
