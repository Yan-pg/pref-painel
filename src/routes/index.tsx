import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Post } from "../pages/Post";

import { Login } from "../pages/Login";
import { Posts } from "../pages/Posts";
import { Users } from "../pages/Users";
import { User } from "../pages/User";
import PrivateRoute from "./Routes";
import { Banners } from "../pages/Banners";
import { EditorPage } from "../pages/Editor";

const RoutesApp: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/banners"
        element={
          <PrivateRoute>
            <Banners />
          </PrivateRoute>
        }
      />
      <Route
        path="/posts"
        element={
          <PrivateRoute>
            <Posts />
          </PrivateRoute>
        }
      />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-post"
        element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        }
      />
      <Route
        path="/editor"
        element={
          <PrivateRoute>
            <EditorPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/create-user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />

      <Route
        path="/user/:userId"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);

export default RoutesApp;
