import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Helplines from "./pages/Helplines";
import Login from "./pages/Login";
import Chatbot from "./pages/Chatbot";
import Journal from "./pages/Journal";
import Resources from "./pages/Resources";
import SOSButton from "./utils/SOSButton";

const App = () => {
  // const isAuthenticated = localStorage.getItem("userLoggedIn") === "true";
    const isAuthenticated = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/helplines" element={<Helplines />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/journal"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Journal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Resources />
            </ProtectedRoute>
          }
        />

        
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Chatbot />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sos"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <SOSButton />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
