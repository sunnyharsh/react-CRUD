import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            markClass:"",

        }
       
    }
    updateClass(){
        console.log("array updated")
        console.log("item status" , this.props.item.mark);
        let myClass=this.props.item.mark?"red":"";
        this.setState({
            markClass:myClass
        })
    }
  
    render(){
    return(
       
            <tr className={this.state.markClass}>
                 <td>{this.props.item.id}</td>
                 <td>{this.props.item.name}</td>
                 <td>{this.props.item.price}</td>
                 <td>{this.props.item.desc}</td>
                 <td><button className="btn btn-danger" onClick={()=>{
                     this.props.item.toggle();
                     this.updateClass();
                     this.props.UpdateList()}}>Delete</button></td>
            </tr>
        
    )
}
}
export default List;