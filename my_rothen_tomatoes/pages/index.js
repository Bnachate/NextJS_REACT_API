import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel/Carousel';
import Body from '../components/HomePage/Body';
import Search from '../components/SearchBar/Search'
import Results from '../components/SearchBar/Results'
import Popup from '../components/SearchBar/Popup'


const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(10),
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
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
//--------------- Main Function -------------->
class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      rows: [],
      query: "",
      currentPage: 1
    }
   
    

  
  }
  async componentDidMount() {
     await this.fetchMovies();
} 

async fetchMovies() {
    await fetch('http://localhost:3000/api/movies', { method: "GET" })
        .then(response => response.json())
        .then(result => this.setState({
            rows: result
        }));
       /* console.log(`sisi ${this.state.rows}`) */
}

async queryFilms(value) {

}

  render() {
    console.log()
    /* const [state, setState] = useState({
      s: "",
      results: [],
      selected: {}
    });
  
    const search = (e) => {
      if (e.key === "Enter") {
        axios(apiurl + "&s=" + state.s).then(({ data }) => {
          let results = data.Search;
  
          setState(prevState => {
            return { ...prevState, results: results }
          })
        });
      }
    }
    
    const handleInput = (e) => {
      let s = e.target.value;
  
      setState(prevState => {
        return { ...prevState, s: s }
      });
    }
  
    const openPopup = id => {
      axios(apiurl + "&i=" + id).then(({ data }) => {
        let result = data;
  
        console.log(result);
  
        setState(prevState => {
          return { ...prevState, selected: result }
        });
      });
    }
  
    const closePopup = () => {
      setState(prevState => {
        return { ...prevState, selected: {} }
      });
    }  */
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        {/* <Search handleInput={handleInput} search={search} /> */}

        {/* <Results results={state.results} openPopup={openPopup} /> */}

         {/* {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false} */}

        <Carousel />

        <Body movies = { this.state.rows }/>
      </main>
     <Footer />
    </React.Fragment>
    
  );
}
}

export default App;