import React, { Component } from 'react'
 
class Counter extends Component {
   
    
    customizeCount(){
        let {value}=this.props.counter; 
         return value===0 ? <span className="badge  badge-secondary">Zero</span>
         :<span className="badge badge-secondary">{value}</span>
    }
    
    
   
    render() { 
        return (
            <div className='row'>
                <div className="col-1">{this.customizeCount( )}</div> 
                <div className="col-2">
                <button onClick={()=>this.props.onIncrement(this.props.counter)}
                 className="btn btn-primary  btn-sm m-2">+</button>
                 <button onClick={()=>this.props.onDecrement(this.props.counter)}    
                disabled={this.props.counter.value===0 ? 'disabled':''}
                className="btn btn-primary btn-sm m-2">-</button>            
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-">x</button>
                </div>

                             
            
            </div>
        );
    }
}
 
export default Counter;