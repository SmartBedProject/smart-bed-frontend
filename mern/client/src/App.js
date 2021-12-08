import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/MainNavbar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";

const App = () => {
  return (
    <>
      <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
      />
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/create" element={<CreateNote />} />
      </Routes>
    </>
  );
};

export default App;