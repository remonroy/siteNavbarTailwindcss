import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/LinkPage/Cart";
import Dashboard from "./pages/LinkPage/Dashboard";
import User from "./pages/LinkPage/User";
import Message from "./pages/LinkPage/Message";
import Analytics from "./pages/LinkPage/Analytics";
import FileManager from "./pages/LinkPage/FileManager";
import Saved from "./pages/LinkPage/Saved";
import Setting from "./pages/LinkPage/Setting";
import SiteNavbar from "./pages/Navbar/SiteNavbar";

const App = () => {
  return (
    <section className="flex gap-6 bg-[#ddd] ">
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/fileMessenger" element={<FileManager />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </section>
  );
};

export default App;
