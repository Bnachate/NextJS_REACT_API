import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Link from 'next/link';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  footera: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  logo: {
    maxWidth: 160,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  //Gridlist css
  rooty: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const Body = (movies) => {

  const classes = useStyles();
  console.log(movies.movies)
  return (

<Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
         <Grid container spacing={4}>
            {movies.movies.map((movie) => (
              <Grid item key={movie._id} xs={12} sm={6} md={4}>
                 <Card className={classes.card}>
                <Link href={`/${movie._id}`}>
                  <CardMedia
                  style={{width:"400px", height:"400px"}}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    title="nique"
                  />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      { movie.title }
                    </Typography>
                    
                  </CardContent>
                  <CardActions>
                  <Fab size="small" color="secondary" aria-label="add" className="fabbtn">
                  <AddIcon />
                </Fab>
                <Link href={`/${movie._id}`}>
                  <Button className="viewbtn" size="small" color="secondary">
                    View
                    </Button>
                </Link>
                <Button className="comentbtn" size="small" color="secondary">
                  COMENT
                    </Button>
              </CardActions>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default Body;