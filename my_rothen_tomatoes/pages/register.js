import axios from 'axios';
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';


class Login extends React.Component {

    state = {}
    
   handleSubmit = (e) => {
       e.preventDefault();
       const data= {
        first_name: this.firstName,
        last_name:this.lastName,
        email: this.email,
        password: this.password,
        password_confirm: this.confirmPassword
        }
        try{
            axios.post('http://localhost:3000/api/users/', data).then(
                res => {
                    console.log(res)
                }
            )
        window.location.href = '/login'
        
        }catch(err){
                console.log(err);
                this.setState({error: "erreur register"})    
        }
        

    }


  render() {

    return (
        <React.Fragment>
    
      <Navbar />
      <div className="wrapper">
        <div className="form-wrapper">
        <form onSubmit={ this.handleSubmit }>
          <h2>Sign-UP</h2>
    
          <div className="firstName">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name"
                    onChange= { e => this.firstName = e.target.value } />
                </div>
                <div className="lastName">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name"
                    onChange= { e => this.lastName = e.target.value }/>
                </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" placeholder="Email" onChange= { e => this.email = e.target.value }/>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" placeholder="Password" onChange= { e => this.password = e.target.value }/>
            </div>
            <div className="confpassword">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password"
                    onChange= { e => this.confirmPassword = e.target.value }/>
                </div>
            <div className="createAccount">
              <button className="btn btn-primary btn-block">Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
      </React.Fragment>
    )
  }
}


export default Login;