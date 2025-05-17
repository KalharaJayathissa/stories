import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App"; // this is your home page
import Storypage from "./storypage";


export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/storypage" element={<Storypage />} />
      </Routes>
    </AnimatePresence>
  );
}
