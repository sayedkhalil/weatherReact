
import React , { Component } from 'react';
import './App.css';
import Face from "./component/Face"
import Details from "./component/Details"
const kai ="aade3016f1f0f659391ef3ca65c0b9c1"
class App extends Component{
  state={
    temprature:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    error:"",
  }

  render(){
  let  getw =async (e)=>{
e.preventDefault()
let city = e.target.elements.city.value
let countery = e.target.elements.countery.value
let api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countery}&appid=${kai}`)
let data = await api.json()
console.log(data)
if(city&&countery){
  this.setState({
    temprature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description :data.weather[0].description,
      error:"",
  })
}else{
  
  this.setState({
    temprature:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    error:"please enter input",
  })
}
    }
  return (
    <div className="App">
      <h1> weather App</h1>
           <Face getw={getw}/>
           <Details 
            temprature={this.state.temprature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
           />
    </div>
  );
}}

export default App;
