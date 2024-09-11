import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// views
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import View404 from "./views/View404";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="*" element={<View404/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
