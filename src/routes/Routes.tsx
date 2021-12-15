import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../hooks/Auth";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
