import React , {Component} from 'react';

class New extends Component{
  constructor(props) 
    { 
        super(props); 
        this.state={value:"hello"};
        this.update=this.update.bind(this)
    }
    update(event){
      this.setState({value: event.target.value});
    }

  render(){
    const { value }= this.state
    
    return(
        <div>
        <input type="text" onChange={this.update} />
        {this.state.value}
        
        {value}
        </div>
    );
  


  }
} 
export default New;
