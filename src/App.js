import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./pages/login";
import Request from "./pages/requests";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          
          <Route path="/" element={<Login />} />

          <Route path="/request" element={<Request />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
