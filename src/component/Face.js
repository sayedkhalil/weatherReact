import React, { Component } from "react";
import "../component/Face.css"
class Face extends Component{
    render(){
        return(
            <div>
  <form  onSubmit={this.props.getw}>             
<input className="dd" type="text" placeholder="enter your countery" name="countery"></input>
<input className="dd" type="text" placeholder="enter your city" name="city"></input>
<input type="submit" value="show details"></input>
</form> 
            </div>
        )
    }
}
export default Face