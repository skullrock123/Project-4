import React,{Component} from 'react';
import './Todo.css'

class Todo extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            items:[],
            itemstemp:""
        };
    }
    

    boxcontent=(e)=>{
     this.setState({itemstemp:e.target.value});
    }
    additem=()=>{
    let currentitem=this.state.itemstemp;
    let existingitems=this.state.items;
    existingitems.push(currentitem);
    this.setState({items:existingitems});
        this.setState({itemstemp:""});

    }
    removeitem=(i)=>
    { 
        if(window.confirm("Are you sure you want to delete this?")===false)
        return;
       let olditemlist=this.state.items;
       olditemlist.splice(i,1);
       this.setState({items:olditemlist});
       
    }
    

    render()
    {
    return(
<div className='maindiv'>
    <div className='div1'><h1>ToDo LIST</h1></div>
   <div className='div2'><input type="text" onChange={this.boxcontent} className='box' value={this.state.itemstemp} placeholder='Enter your List'/>
   <button onClick={this.additem} className='addbutton' >Add</button></div>
   
   
   <ul>
   <div className='divlist'>
    {this.state.items.map((itm,k)=><li>{itm}  <button className='deletebutton' onClick={()=>{this.removeitem(k)}}>Delete</button></li>)}
</div>
   </ul>

</div>
    )
    }
}
export default Todo;