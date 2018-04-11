import React from 'react';
import Item from '../model/Item';
export  const ItemOperation={
    Itemlist:[],
    prepareItem:function(ItemJSOBJ){
        for(var i=0;i<ItemJSOBJ.length;i++){
            var item = new Item(ItemJSOBJ[i].id,ItemJSOBJ[i].name,ItemJSOBJ[i].price,ItemJSOBJ[i].desc,false);
            this.Itemlist.push(item);
        }
    
    },
    GETITEMS:function(){
        return this.Itemlist;
    }
}