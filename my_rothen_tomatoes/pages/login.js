import React, { Component } from "react";
import Router from "next/router";
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';


class Login extends React.Component {

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


    async like(){
        



    }


    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }
        
        this.state.rows.forEach(user => {
            if(user.email === data.email && user.password === data.password) {
                this.setState({
                    exist: true
                })

                localStorage.setItem('email', user.email);
                localStorage.setItem('first_name', user.first_name);
                localStorage.setItem('last_name', user.last_name);
                user.isLogin = true;
                this.setState( {
                    isLogin: true
                });
                localStorage.setItem('isLogin', user.isLogin);
                window.location.reload();
                 
               
            }
              
        })
       
    };

  render() {
      
    if(this.state.isLogin) {
        window.location.href = '/'
    }else{
    return (
        <React.Fragment>
    
      <Navbar />
      <div className="wrapper">
        <div className="form-wrapper">
        <form onSubmit={ this.handleSubmit }>
          <h2>Login</h2>
    
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" placeholder="Email" onChange= { e => this.email = e.target.value }/>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" placeholder="Password" onChange= { e => this.password = e.target.value }/>
            </div>
            <div className="createAccount">
              <button type="submit">Login</button>
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
}

export default Login;