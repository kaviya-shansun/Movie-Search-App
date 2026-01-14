import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Genre from "../components/Genre";
import Settings from "../components/Settings";
import Help from "../components/Help";
import MainLayout from "../layout/MainLayout";
import Discover from "../components/Discover";
import Login from "../components/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
