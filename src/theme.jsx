
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';


import NexaBold from '/home/jacob/farvecomponent/src/assets/fonts/NexaBold.ttf';

const theme = createMuiTheme({
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

  // root: {
  //   background: 'linear-gradient(45deg, #FFFFFF 100%, #FFFFFF 100%)',
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //   color: 'white',
  //   height: 48,
  //   padding: '0 30px',
  // },
});



// const theme = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

export default theme;