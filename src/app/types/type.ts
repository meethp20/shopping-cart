interface item{
    name:string;
    price : number;
    description?:string;
    quantity : 1 | number;
    imageUrl?:string;
}


export interface shoppingCart{
    items:item[];
    total:number
    discount : number 
}