import React from 'react';

 class ShowHide extends React.Component{
    constructor(props){
      super(props);
     
    }
    init(){
        console.log("init run....")
        document.getElementById('search').addEventListener('click',showSearch); 
        document.getElementById('sort').addEventListener('click',show);  
        document.getElementById('selectSort').addEventListener('change' , getValue);
        document.getElementById('selectSearch').addEventListener('change' , searchValue)
    }
    show(){
        console.log("show run");
    var tag=document.getElementById('hide');
    if(tag.id=='hide'){
        tag.id="show";
    } 
    }
    showSearch(){
        console.log("show run");
        var tag=document.getElementById('hide');
        if(tag.id=='hide'){
            tag.id="searhShow";
        }  
    }
    getValue(){
        var a = document.getElementById("selectSort");
        alert(a.options[a.selectedIndex].value);
    }
    searchValue(){
        var a = document.getElementById("selectSearch");
    alert(a.options[a.selectedIndex].value);
    }

}
