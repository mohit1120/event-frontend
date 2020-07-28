import React from 'react';
import './style.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Header from '../../../Header';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Addevent extends React.Component {
    constructor() {
        super();
        this.state = {
          id: '',
          email: '',
          success:false,
          error:'',
          submitclicked:false,
        };
      }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
if(this.state.submitclicked)
{
    alert('already submitted');
    return;
}
    e.preventDefault();
    const { id } = this.state;
    const cookies = new Cookies();
    const email=cookies.get('email');
    const token=cookies.get('token');
    const login=cookies.get('loggedIn');
    this.setState({ submitclicked: true});
    if(!email || !login || !token)
    {
        window.location.href ='/login';
    }
    
    const data=JSON.stringify({ id:id, email:email });
    console.log(id,email);
    fetch('https://peaceful-spire-23915.herokuapp.com/removeevent',{ method:"POST",headers:{'Content-type': 'application/json',"Accept":"application/json"},body:data})
    .then(response => response.json())
    .then(json => {const {success,message}=json;
    this.setState({ success: success,message:message});
    if(message){
        alert(message);
    }
    window.location.href='/myevent';
    }) 
}
    render() {
        const {id} = this.state;
        return (
            <div>
                <Header/>
                {this.state.submitclicked &&  (<div style={{margin:'auto',textAlign:'center' }}> <Loader
         type="Puff"
         color="#00BFFF"
         timeout={3000} //3 secs
         text="hello"
        />
        
         </div>)
                }

              {!this.state.submitclicked  &&  <form  onSubmit={this.onSubmit} className="login-form">
                <h1>Remove Event</h1>
                <div className="txtb">
                    <input
                    type="text" name="id"
                    value={id} required
                    onChange={this.onChange}
                    placeholder="Passcode" />
                </div>
                <button type="submit" className="loginbtn">Submit</button>
                </form>
              }
            </div>
            
        );
    }
}
export default Addevent;
