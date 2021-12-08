import React from "react";
import { Routes, Route } from "react-router-dom";

// We use Route in order to define the different routes of our application

// We import all the components we need in our app
import Navbar from "./components/Navbar";



import Home from "./components/Home";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";

const App = () => {
  return (
    // Navbar
    // Home
    // Notes
    // Create Note
    <div>
        <Navbar />
        <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/create" component={CreateNote} />
        </Routes>
    </div>
  );
};

export default App;