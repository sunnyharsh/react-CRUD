class Item{
    constructor(id ,name , price , desc){
        this.id=id;
        this.name=name;
        this.price=price;
        this.desc=desc;
        this.mark=false;
    }
    toggle(){
        console.log("toggle run")
        this.mark=!this.mark;
    }
}
export default Item;