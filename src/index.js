import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { NextUIProvider } from "@nextui-org/react";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </NextUIProvider>
  </React.StrictMode>
);
