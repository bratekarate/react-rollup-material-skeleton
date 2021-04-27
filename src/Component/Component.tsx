import React from "react";
import { Button, Container } from "@material-ui/core";
import "./component.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

interface ComponentProps {
  flag?: boolean;
}

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export const Component: React.FC<ComponentProps> = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Button variant="contained" color="primary">
        Hello Button
      </Button>
      <Button variant="contained" color="secondary">
        Hi Button
      </Button>
    </Container>
  </ThemeProvider>
);
