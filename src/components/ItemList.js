import React from 'react';
import List from './List';
const ItemList=(props)=>{

    
    return(
        <div id="items">
        <table id="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>desc</th>
                    <th>Actions</th>
                </tr>
            </thead>
           <tbody>
           {props.List.map((data)=>
                        <List  UpdateList={props.updateItemList}  key={data.id}  item={data}/>
                       
                    )}
           </tbody>
        </table>
    </div>
    )
}
export default ItemList