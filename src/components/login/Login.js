import React from 'react';
import './style.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          success:false,
          error:''
        };
      }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const data=JSON.stringify({ email: username,password: password });
    fetch('https://peaceful-spire-23915.herokuapp.com/login',{ method:"POST",headers:{'Content-type': 'application/json',"Accept":"application/json","cors":'no',"Access-Control-Allow-Origin":'*'},body:data})
    .then(response => response.json())
    .then(json => {const {success,message,token,user_info}=json;
    this.setState({ success: success,message:message});
    if(message){
        alert(message);
    }
    if(success){
    const cookies = new Cookies();
    cookies.set('token', json.token, { path: '/' },{ httpOnly: true });
    cookies.set('loggedIn', true, { path: '/' });
    cookies.set('email', user_info[0].email);
    console.log('hi');
    window.location.href ='/'
    }
    }); 
}
    render() {
        const {username, password } = this.state;
        return (
            <div>
                <form  onSubmit={this.onSubmit} className="login-form">
                <h1>Login</h1>
                <div className="txtb">
                    <input
                    type="text" name="username"
                    value={username} required
                    onChange={this.onChange}
                    placeholder="Username" />
                </div>

                <div className="txtb">
                    <input type="text" name="password"
                    value={password} required
                    onChange={this.onChange}
                    placeholder="password" />
                </div>

                <button type="submit" className="loginbtn">Submit</button>

                <div className="bottom-text">
                    Don't have account? <a href="/Signup">Sign up</a>
                </div>
                </form>
            </div>
        );
    }
}
export default Login;
