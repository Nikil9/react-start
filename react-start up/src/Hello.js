import React , {Component} from 'react';

class Hello extends Component{
  constructor(props) 
    { 
        super(props); 
        this.state={value:5};
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        
    }
    increment(){
      this.setState({value: this.state.value+1});
    }

    decrement(){
      this.setState({value:this.state.value-1});
    }
    
  render(){
    return(
        <h1>
        <input type="button" value="Increment" onClick={this.increment} />
        <input type="button" value="Decrement" onClick={this.decrement} />
        {this.state.value}
        </h1>
    );
  


  }
} 
export default Hello;
