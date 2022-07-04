import { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component { 
  state = {
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}    
    ]
} 
handleDelete=(counterId)=>{
    let counters = this.state.counters.filter(c=>c.id!==counterId)
    this.setState({counters})
}
handleReset=()=>{
    let counters= this.state.counters.map(counter=>{
        counter.value = 0;
        return counter;})
    this.setState({counters})

} 
handleIncrement=counter=>{
   let counters=[...this.state.counters]
   let index = counters.indexOf(counter)
   counters[index]={...counter}
   counters[index].value++
   this.setState({counters})
} 
handleDecrement=(counter)=>{
  let counters=[...this.state.counters]
   let index = counters.indexOf(counter)
   counters[index]={...counter}
   counters[index].value--;
   this.setState({counters})

}
   render() { 
      return (
        <div>
        <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className='container'>      
          <Counters 
          onReset={this.handleReset}
          counters={this.state.counters} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete} 
          onDecrement={this.handleDecrement}
          />
        </main>
        </div>
        
      );
    }
  }
   
  export default App;
   
   
 

