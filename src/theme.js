import { blue, blueGrey, red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
    danger: red
    // type: "dark"
  }
});

export default theme;
