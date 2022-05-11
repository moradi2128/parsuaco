import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    colorPrimary: "#efb81f",
    colorText: "#fff",
    colorMain: "#2d2d32",
    colorMainSec: "#2a2a2e",
    colorDark: "#000",
    colorMainLight: "hsla(0,0%,100%,.41)",
    colorMainSecLight: "#eee",
  },
  transitions: {
    trMain: "all 0.3s ease",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
