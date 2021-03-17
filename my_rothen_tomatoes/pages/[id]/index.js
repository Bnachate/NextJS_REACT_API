import React, {useStyles} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Commentaries from '../../components/Commentaries/index'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Review from '../Review';
import fetch from 'isomorphic-unfetch';
import { withStyles } from "@material-ui/core/styles";


const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const Show = ({ data }) => {

  /* console.log("--------------------DATAAAAAAAAAAAA-----------------")
   console.log(data) */
  const classes = useStyles();
  return (
    <React.Fragment>
    
      <Navbar />
      <main>
        {/* Hero unit */}

        <Card /* className={classes.root} */>
          <CardActionArea>

            <CardMedia
              style={{ width: "600px", height: "600px", marginTop: "50px" }}
              image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Card>
            <Review id={data._id} />
          </Card>
          <CardActions>
            <Button size="small" color="primary">
              Share
        </Button>
            <Button size="small" color="primary">
              Learn More
        </Button>
      </CardActions>
    </Card>
    <hr></hr>
    <Commentaries props={data}/>
      </main>
      <Footer />
    </React.Fragment>
  );
}

Show.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/movies/${id}`);
  console.log(res)
  const { data } = await res.json();
  /* console.log("------------------DATA--------------------")
  console.log(data)
  
  console.log("--------------------ROW-------------------")
  console.log(data.title) */
  return { data: data }
}

export default Show;