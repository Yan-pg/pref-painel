import React from "react";

import { AuthProvider } from "./Auth";
import { PostProvider } from "./Post";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PostProvider>{children}</PostProvider>
  </AuthProvider>
);

export default AppProvider;
