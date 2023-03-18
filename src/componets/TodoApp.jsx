import { Routes, Route } from "react-router-dom";
import About from "../routes/About";
import Home from "../routes/Home";
import Login from "../routes/Login";
import NotMatch from "../routes/NotMatch";
import Profile from "../routes/Profile";
import SinglePage from "../routes/SinglePage";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};

export default TodoApp;
