import React from 'react';
import './style.css';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',  
          email: '',
          password: '',
          success:false,
          message: '',
          error:''
        };
      }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const data=JSON.stringify({ name: name, email: email,password: password });
    fetch('https://peaceful-spire-23915.herokuapp.com/signup',{ method:"POST",headers:{'Content-type': 'application/json',"Accept":"application/json"},body:data})
    .then(response => response.json())
    .then(json => {const {success,message}=json;
    this.setState({ success: success, message:message});
    if(message){
        alert(message);
    }
    if(success){
        window.location.href ='/login'
    }
    }) 
}
    render() {
        const {name, email, password } = this.state;
        return (
            <div>
                <form  onSubmit={this.onSubmit} className="login-form">
                <h1>Sign up</h1>
                <div className="txtb">
                    <input
                    type="text" name="name"
                    value={name} required
                    onChange={this.onChange}
                    placeholder="Name" />
                </div>
                
                <div className="txtb">
                    <input
                    type="text" name="email"
                    value={email} required
                    onChange={this.onChange}
                    placeholder="Username" />
                </div>

                <div className="txtb">
                    <input type="text" name="password"
                    value={password} required
                    onChange={this.onChange}
                    placeholder="Password" />
                </div>

                <button type="submit" className="loginbtn">Submit</button>

                <div className="bottom-text">
                    Have a account? <a href="/login">Login</a>
                </div>
                </form>
            </div>
        );
    }
}
export default Login;
