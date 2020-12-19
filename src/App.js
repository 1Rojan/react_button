import react, {Component} from 'react';
import './App.css';

class App extends Component{

  state = {
    color: ['red', 'blue', 'green', 'black', 'orange']
  }

  handleChange=(e)=>{
    if(e.target.style.backgroundColor == 'blue'){
      let btColor = "green";
      this.changeColor(e, btColor)
    }
    else{
    let colors = this.state.color;
    var color = colors[Math.floor(Math.random() * colors.length)];
    this.changeColor(e, color)
  }}

  changeColor(ev, color){
    ev.target.style.backgroundColor=color;
  }

  render(){
    return(
      <div className="parent">
        <button style={{ backgroundColor: this.state}} onClick={this.handleChange}>click me</button>
      </div>
    )
  }
}

 export default App;
