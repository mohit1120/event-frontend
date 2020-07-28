import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/singup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import Cookies from 'universal-cookie';
import Myevent from './components/events/myevent/myEvent'
import Addevent from './components/events/addevent/AddEvent';
import Removeevent from './components/events/removeevent/removeevent';


function App() {
  
const cookies = new Cookies();
const login=cookies.get('token')&& cookies.get('token').length && cookies.get('loggedIn');
console.log(cookies,cookies.get('token'),login,cookies.get('loggedIn'));

  return (
<Router>
<Switch>


<Route exact path="/signup" component={Signup}/>
<Route exact path="/login" component={Login}/>
<Route exact path ="/"   component = {login?Dashboard:Login} />}
<Route exact path ="/myevent"   component = {login?Myevent:Login} />}
<Route exact path ="/addevent"   component = {login?Addevent:Login} />}
<Route exact path ="/removeevent"   component = {login?Removeevent:Login} />}



</Switch>
</Router>
    );
}

export default App;
