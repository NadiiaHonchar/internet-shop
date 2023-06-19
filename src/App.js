// layout link https://www.figma.com/file/IQ4BnIikAm9HTDeg0yG0Oe/Branding-WordShop?type=design&node-id=0-1&t=gAz1GC0VXTlNlAWT-0

import "./App.css";

import { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
const HomeView = lazy(() => import("./pages/HomeView/HomeView"));
const RegisterView = lazy(() => import("./pages/RegisterView/RegisterView"));
const LoginView = lazy(() => import("./pages/LoginView/LoginView"));
const PrivateView = lazy(() => import("./pages/PrivateView/PrivateView"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route index element={<HomeView />} />
      <Route path="register" element={<RegisterView />}></Route>
      <Route path="login" element={<LoginView />} />
      <Route path="private" element={<PrivateView />} />
    </Routes>
  );
}

export default App;
