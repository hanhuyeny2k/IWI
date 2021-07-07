import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
  overrides: {
    MuiCollapse: {
      container: {
        overflow: 'visible'
      },
      hidden: {
	visibility: 'visible'
      }
    }
  }
});
