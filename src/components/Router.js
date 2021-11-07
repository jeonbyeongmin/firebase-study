import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            {console.log("home")}
            <Route exact path="/" element={<Home />} />
          </>
        ) : (
          <>
            {console.log("auth")}
            <Route exact path="/" element={<Auth />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
