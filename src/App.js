import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import route from "./core/routes";
import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {route.map((page, index) => (
          <Route path={page.path} element={<page.component />} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
