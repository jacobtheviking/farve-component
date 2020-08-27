import { createMuiTheme } from '@material-ui/core/styles';
import NexaBold from './assets/fonts/NexaBold.ttf';

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#675DFF'
    }
  },
  typography: {
    fontFamily: 'NexaBold'
  },
  overrides: {
    MuiCssBaseline: {
      '@global:': {
        '@font-face': [NexaBold],
      },
    },
  },
});

export default theme;