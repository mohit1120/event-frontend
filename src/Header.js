import './App.css';
import {Logout} from './shared/utility';
import React from 'react';
const Header=()=>{

return ( 
<div>
<header class="header-fixed">

<div class="header-limiter">

  <h1><a href="/">Hubx<span>Career</span></a></h1>

  <nav>
    <a href="/">Home</a>
    <a href="/addevent">Add Event</a>
    <a href="/myevent">My Event</a>
    <a href="/removeevent">Remove Event</a>
    <a href="/login" onClick={Logout}>Logout</a>
  </nav>

</div>

</header>
</div>
);

}

export default Header;