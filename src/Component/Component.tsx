import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import "./component.css";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Styles } from "@material-ui/core/styles/withStyles";

interface ComponentProps {
  flag?: boolean;
  classes: {[key: string]: string};
}

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing(9),
    padding: theme.spacing(3),
    marginTop: theme.spacing(7),
    overflowX: "hidden",
  },
});

const Component: React.FC<ComponentProps> = ({ classes }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className={classes.root}>
      <Grid className={classes.content} container spacing={3}>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Button variant="contained" color="secondary">
              Hi Button
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Button variant="contained" color="primary">
              Hello Button
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </ThemeProvider>
);

export default withStyles(
  styles as Styles<Theme, Record<string, unknown>, string>
)(Component);
