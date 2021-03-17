import axios from 'axios';
import React from "react";


class Test extends React.Component {

    state = {}


    async componentDidMount(){
    if(localStorage.getItem('isLogin')){
        this.setState
        ({isLogin : true})
        await this.fetchUsers();

        this.state.rows.forEach(row => {
            if(row.email == localStorage.getItem('email') ){
                this.setState ({currentUser:row})
            }
        }); 

        }
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
   
    render () {
       
        return (
            <>
            <p>hello</p>
            </>
    
        )
    }
}
export default Test;

