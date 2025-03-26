import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NotesContextProvider from "./Context/NotesContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NotesContextProvider>
      <App />
    </NotesContextProvider>
  </BrowserRouter>
);
