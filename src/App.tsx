import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import logo from './logo.svg';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";


export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* default navigate to Labs*/}
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}