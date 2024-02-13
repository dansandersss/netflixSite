import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import MainContainer from "./Main/MainContainer";
import MyList from "./MyList/MyList";
import Episodes from "./Episodes/Episodes";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/episodes" element={<Episodes />} />
          {/* Добавьте другие маршруты здесь, если необходимо */}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
