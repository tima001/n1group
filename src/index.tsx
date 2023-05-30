import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

declare module "@mui/material/styles" {
  interface PaletteOptions {
    blue?: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#00B998",
    },
    grey: {
      100: "#F1F3F5",
      200: "#EEEEEE",
      300: "#AABBC7",
      400: "#96A9B8",
      500: "#8199AB",
      600: "#738998",
      700: "#627480",
      800: "#53606A",
      900: "#404A51",
    },
    blue: {
      100: "#C1DEFF",
      200: "#99CAFF",
      300: "#73B5FF",
      400: "#5BA4FF",
      500: "#5094FF",
      600: "#5185FF",
      700: "#4F72EA",
      800: "#4D60D7",
      900: "#493EB6",
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: "none",
          borderRadius: "8px",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { size: "large" },
          style: {
            height: 48,
            padding: "0 30px",
            borderRadius: 8,
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 34,
          padding: "0 16px",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Gilroy",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
