import React, {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Image from "next/image";


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
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
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


class Navbar extends React.Component {

  state = {}

  componentDidMount(){
    if(localStorage.getItem('isLogin')){
    this.setState({
        isLogin : true
    })
    }
    else{
    this.setState({
    isLogin : false
    })

    }

    this.fetchUsers()
}

async fetchUsers() {
    await fetch('http://localhost:3000/api/users', { method: "GET" })
        .then(response => response.text())
        .then(result => this.setState({
            rows: JSON.parse(result)
        }));
}


  handleLogout = () => {
    localStorage.removeItem("isLogin");
    window.location.reload(); 
  }

  render(){
    //const classes = useStyles();
    let button;

    if(this.state.isLogin == true){
      button =  (
        <a href="/" onClick={ this.handleLogout} className="nav-link">Logout</a>
      )
      
    }else{
      button = (
        <>
      
        <a href="/login" className="nav-link">Login</a>
        <p> / </p>
        <a href="/register" className="nav-link">Sign-up</a>
        </>
      )
    }

    return(
        //<div className={classes.root}>
        <div>  
      <AppBar position="static" style={{height:"80px"}}>
        <Toolbar className="Nav">
          <div className="logo">
          <Image href="http://localhost:3000" src='/logo.png' alt="logo" width='200px' height='200px'/>
          </div>
          <div>
          <Button className="movies" color="inherit">MOVIES</Button>
          </div>
          <div>
          <Button className="podcast" color="inherit">BK PODCAST</Button>
          </div>
          <div>
          <Button className="news" color="inherit">NEWS</Button>
          </div>
          <div>
          <Button className="showtime" color="inherit">{button}</Button>
          </div>
 

        </Toolbar>
      </AppBar>
    </div>
    )
}
}
export default Navbar;