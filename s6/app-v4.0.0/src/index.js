
import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ColorProvider from "./ColorProvider";

export const ColorContext = createContext();

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>
);