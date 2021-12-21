import React, { createContext, useContext, useState } from "react";

interface PostContextData {
  contentPost: string;
  setContentPost: React.Dispatch<React.SetStateAction<string>>;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

export const PostProvider: React.FC = ({ children }) => {
  const [contentPost, setContentPost] = useState("");

  return (
    <PostContext.Provider value={{ contentPost, setContentPost }}>
      {children}
    </PostContext.Provider>
  );
};

export function usePost(): PostContextData {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("useAuth must be used within as AuthProvider");
  }

  return context;
}
