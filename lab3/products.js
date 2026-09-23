const products=[
    
    {id:1,name:'mobile',qty:150,price:25000},
    {id:2,name:'duster',qty:50,price:250},
  
]
let nextId=3;
 export const getAllProducts = () => {
    return products;
};

export const addProduct=()=>{
   item.id =nextId;
   nextId++;
   products.push(item);
   return item;


};
export const deleteProduct=(Pid)=>{
    const item =products.findIndex((prd) => prd.id===pid);

    if(item==-1)
        return false;
    products.splice(item,1)
    console.log('products remaining:',products);
    return true;
};
//creat a function to update nay product even pid call this function into prg6.js
//and verify its working by echo api 

export const updateproducts=(pid,updateItem)=>{
     const item =products.findIndex((prd) => prd.id===pid);

     if(item==-1){
        return false;
     }
     updateItem.id=pid;
     products[item]=updateItem;
    //  Object.assign(products[item],updateItem);
     return updateItem;


};

export const getProductById=(pid)=>{
    const item =products.findIndex((prd) => prd.id===pid);
    if(index==-1){
        return false;

    }
    return products[index];

}