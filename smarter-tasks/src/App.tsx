import React, { useContext } from "react";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { UsersProvider } from "./context/members/context";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen bg-${theme === "dark" ? "gray-800" : "gray-100"} text-${theme === "dark" ? "white" : "black"} transition-colors duration-300`}>
        <ProjectsProvider>
        <UsersProvider>
          <RouterProvider router={router} />
        </UsersProvider>
      </ProjectsProvider>
    </div>
  );
};

export default App;
