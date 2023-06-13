import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Events from "../Pages/Events";
import EventsDetails from "../Pages/EventsDetails";

const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Eventos" element={<Events />} />
      <Route path="/Eventos/:id" element={<EventsDetails />} />
    </Routes>
  );
};

export default RouterApp;
