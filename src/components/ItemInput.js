import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import ShowHide from '../model/showHide';
export class ItemInput extends React.Component{
    constructor(props){
        super(props);
    }
    doSort(){
   console.log(`dosort called...`);
    }
    doSearch(){
    console.log(`do search called...`);
    }
    render(){
        return(
            <div>
               <div className="form-group">
                   <input type="text" className="form-control" placeholder="enter id here" onChange={this.props.takeid}/>
               </div>
               <div className="fsearchorm-group">
                       <input type="text" className="form-control" placeholder="enter here name" onChange={this.props.takename}/>
               </div>
               <div className="form-group">
                   <input type="text" className="form-control" placeholder="enter price here" onChange={this.props.takeprice}/>
               </div>
               <div className="form-group">
                       <input type="text" className="form-control" placeholder="enter here desc" onChange={this.props.takedesc}/>
               </div>
   
               <div>
                   <button className="btn btn-success" id="buttoncls" onClick={this.props.add}>Add</button>
                   <button className="btn btn-danger" id="buttoncls" onClick={this.props.delete}>Delete</button>
                   <button className="btn btn-info" id="buttoncls" onClick={this.props.save}>Save</button>
                   <button className="btn btn-info" id="buttoncls" onClick={this.props.fetch}>Fetch</button>
                   <button className="btn btn-info show" id="sort" onClick={this.props.sort}>Sort</button>
                   <button className="btn btn-info show" id="search" onClick={this.props.search}>Search</button>
                   <div id="hide">
                      <select name="" id="selectSort"  onChange={this.props.doSort}   >
                           <option value=""></option>
                           <option value="1">id</option>
                           <option value="2">name</option>
                           <option value="3">price</option>
                      </select>
                   </div>
   
                   <div id="hide">
                      <select name="" id="selectSearch" onChange={this.props.doSearch} >
                           <option value=""></option>
                           <option value="1">id</option>
                           <option value="2">name</option>
                           <option value="3">price</option>
                      </select>
                   </div>
               </div>
            </div>
        );
    }

     
 }