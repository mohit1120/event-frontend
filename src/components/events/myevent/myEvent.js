import React from 'react';
import './style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Header from  '../../../Header';
import Cookies from 'universal-cookie';

class MyEvent extends React.Component{

    state = {
        isLoading: true,
        events: [],
        error: null
      }
      componentDidMount() {
        this.fetchEvents();
      }
      getEventList=()=>{

        const events=this.state.events;
        return (<div class="pad10">
        <h2>events are </h2>
        <div class="row" style={{background:'gray'}}><div class="item">Passcode</div>
       <div class="item">Name</div>
       <div class="item">Details</div>
       <div class="item">Organiser</div>
       <div class="item">Date</div>
       </div>
        
       {events.map((item,index)=>{ return (<div class="row"><div class="item">{item.id}</div>
       <div class="item">{item.name}</div>
       <div class="item">{item.description}</div>
       <div class="item">{item.created_by}</div>
       <div class="item">{item.date}</div>
       </div>)
     })}
     </div>)
    
    
    }
      fetchEvents() {
        const cookies = new Cookies();
        const data = cookies.get('email');
        fetch('https://peaceful-spire-23915.herokuapp.com/event?email='+data,{ method:"GET",headers:{'Content-type': 'application/json',"Accept":"application/json"}})
        .then(response => response.json())
        .then(json => {

        const {events,success}=json;
        console.log(events,success,json)
        this.setState({isLoading:false,events:events});


})
      }

      render(){
      return  <>
      <Header/>
      {this.state.isLoading &&  (<div style={{margin:'auto',textAlign:'center' }}> <Loader
         type="Puff"
         color="#00BFFF"
         timeout={3000} //3 secs
         text="hello"
        />
        
         </div>)
 
      }
      {!this.state.isLoading && this.state.events.length && this.getEventList()}
      {(!this.state.isLoading) && (this.state.events.length==0) && (<h2>no event found</h2>)}</>
      }


}





export default MyEvent;
