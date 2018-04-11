import React ,{Component} from 'react';
import {Header} from '../components/Header'
import {ItemInput} from '../components/ItemInput';
import Item from '../model//Item';
import ItemList from '../components/ItemList';
import {ItemOperation} from '../model/itemOperation';
class CRUD extends Component{
    constructor(props){
        super(props)  
        this.title="this is crud Apps";
        this.id=0;
        this.name="";
        this.price=0;
        this.desc="";
        this.state={
            itemArray:[]
        }
    }
    add(){
        var itemObj=new Item(this.id , this.name , this.price, this.desc);
        this.state.itemArray.push(itemObj);
        this.setState({itemArray:this.state.itemArray});
    }
    delete(){
        var l2 = this.updateRowDeletefromItemArray();
        this.setState({itemArray:l2});
    }
    save(){
        if(window.localStorage){
            localStorage.setItem('details', JSON.stringify(this.state.itemArray));
            console.log("save data....")
        }
        else{
            console.log("local storage not available....")
        }
    }
    fetch(){
        var fetchArr=[];
        console.log("fetch....")
        if(window.localStorage){
            var dataFromMyLocalStorage = JSON.parse(localStorage.details);
            dataFromMyLocalStorage.forEach((io)=>console.log(io)); 
            ItemOperation.prepareItem(dataFromMyLocalStorage);
            var newList= ItemOperation.GETITEMS();
            newList.forEach((io)=>console.log(io));
                this.setState({
                itemArray:newList
            })
        }
        else {
            alert("Localstorage not supported...");
        }
    }
    sort(){
        console.log("sort run.....")

    }
    search(){
        console.log("search run.....")
    }
    takeid(event){
        this.id=event.target.value;
    }
    takename(event){
        this.name=event.target.value;
    }
    takeprice(event){
        this.price=event.target.value;
    }
    takedesc(event){
        this.desc=event.target.value;
    }
    updateRowDeletefromItemArray(){
        console.log(`this is crud from List component....`);
        this.state.itemArray.forEach((io)=>console.log(`${io.mark}`));
        var ListforUnmarked=this.state.itemArray.filter((io)=>io.mark==false);
        return ListforUnmarked;
    }
   
    render(){
        return(
            <div>
                <Header/>
                <ItemInput takeid={this.takeid.bind(this)} takename={this.takename.bind(this)}  takeprice={this.takeprice.bind(this)} takedesc={this.takedesc.bind(this)} add={this.add.bind(this)} delete={this.delete.bind(this)} save={this.save.bind(this)} fetch={this.fetch.bind(this)} sort={this.sort.bind(this)} search={this.search.bind(this)}/>
                <ItemList  updateItemList = {this.updateRowDeletefromItemArray.bind(this)}     List={this.state.itemArray} />
                
            </div>
        )
    }
}

export default CRUD;