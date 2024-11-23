import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";

let theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif !important', // Set the default font family for all typography variants
  },
  direction: "ltr",
  palette: {
    mode: "dark",
    background: {
      default: "#0A081F",
      paper: "#13114b",
    },
    primary: {
      main: "#3D3D3D",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a3a3a3",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          font-family: "Plus Jakarta Sans", sans-serif !important;
        }
        body {
          background-color: #0A081F;
          color: #ededed;
          min-height: 100vh;
        }
      `,
    },
    // Override default font for all Material UI components
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Plus Jakarta Sans", sans-serif !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Plus Jakarta Sans", sans-serif !important',
          borderRadius: "100px",
          color: "#ffffff",
          padding: "10px 24px",
          outlineColor: "#3D3D3D",
          borderColor: "#3D3D3D",
          transition: "none",
          "&:hover": {
            backgroundColor: "#e3e5e724",
          },
          "&:active": {
            backgroundColor: "#e3e5e71a",
          },
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        container: () => document.body,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: () => document.body,
      },
    },
    MuiModal: {
      defaultProps: {
        container: () => document.body,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#13114b",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
