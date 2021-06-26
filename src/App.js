import './App.css';
import './Carrousel.scss';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Slider
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Carousel from 'react-material-ui-carousel';
const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Purple Pen',
    fontSize: '2.5em',
    color: 'white'
  },
}));


function Banner(props) {
  if (props.newProp) console.log(props.newProp)
  const contentPosition = props.contentPosition ? props.contentPosition : "left"
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
      <Grid item xs={12 / totalItems} key="content">
          <CardContent className="Content">
              <Typography className="Title">
                  {props.item.Name}
              </Typography>

              <Typography className="Caption">
                  {props.item.Caption}
              </Typography>

              <Button variant="outlined" className="ViewButton">
                  Funciones
              </Button>
          </CardContent>
      </Grid>
  )


  for (let i = 0; i < mediaLength; i++) {
      const item = props.item.Items[i];

      const media = (
          <Grid item xs={12 / totalItems} key={item.Name}>
              <CardMedia
                  className="Media"
                  image={item.Image}
                  title={item.Name}
              >
                  <Typography className="MediaCaption">
                      {item.Name}
                  </Typography>
              </CardMedia>

          </Grid>
      )

      items.push(media);
  }

  if (contentPosition === "left") {
      items.unshift(content);
  } else if (contentPosition === "right") {
      items.push(content);
  } else if (contentPosition === "middle") {
      items.splice(items.length / 2, 0, content);
  }

  return (
      <Card raised className="Banner">
          <Grid container spacing={0} className="BannerGrid">
              {items}
          </Grid>
      </Card>
  )
}

function App() {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff5722'
      }
    }
  });
  var carouselItems = [
    {
      Name: "Cinestar San Carlos",
      Caption: "Uruguay",
      contentPosition: "right",
      Items: [
        {
          Name: "Rapidos y Furiosos 9",
          Image: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/04/Fast-Furious-9.jpeg?fit=1200%2C675&ssl=1"
        },
        {
          Name: "Cruella",
          Image: "https://www.tierragamer.com/wp-content/uploads/2021/06/Canciones-que-salen-en-Cruella.jpg"
        }
      ]
    },
    {
      Name: "Cinestar San Mateo",
      Caption: "Mexico",
      contentPosition: "right",
      Items: [
        {
          Name: "Luca",
          Image: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/c7d9d222e44845356fca76472c06cbdd.png"
        },
        {
          Name: "Rapido y Furiosos 9",
          Image: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/04/Fast-Furious-9.jpeg?fit=1200%2C675&ssl=1"
        }
      ]
    },
    {
      Name: "Cinestar Actopan",
      Caption: "Mexico",
      contentPosition: "right",
      Items: [
        {
          Name: "Luca",
          Image: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/c7d9d222e44845356fca76472c06cbdd.png"
        },
        {
          Name: "Rapido y Furiosos 9",
          Image: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/04/Fast-Furious-9.jpeg?fit=1200%2C675&ssl=1"
        }
      ]
    }
  ]
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cinestar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    <Carousel
      autoPlay={true}
      animation="fade"
      indicators={true}
      timeout={{
        appear: 0,
        enter: 0,
        exit: 0
      }}
      cycleNavigation={true}
    >
      {
        carouselItems.map((item, index)=> {
          return <Banner item={item} key={index} contentPosition={item.contentPosition}/>
        })
      }
    </Carousel>
    </MuiThemeProvider>
  );
}

export default App;
