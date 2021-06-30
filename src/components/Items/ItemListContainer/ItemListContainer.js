import React, { useState,useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {
  //const [cantidad,setCantidad] = useState(0);
  const [itemList,setItemList] = useState([]);
  const tempItemList = [{ id:1, title : "Producto 1", description: "Descripcion 1", price: "10", pictureUrl:"https://i.pinimg.com/564x/29/33/62/293362396463d58ad3e03bab526d48ee.jpg" },{ id:2, title : "Producto 2", description: "Descripcion 2", price: "20", pictureUrl:"https://d2h1pu99sxkfvn.cloudfront.net/b0/13275942/559334279_BsMzaN0A9I/P0.jpg" },{ id:3, title : "Producto 3", description: "Descripcion 3", price: "30", pictureUrl:"https://i.ebayimg.com/images/g/VHcAAOSw-RlfludU/s-l400.jpg" },{ id:4, title : "Producto 4", description: "Descripcion 4", price: "40", pictureUrl:"https://media.karousell.com/media/photos/products/2020/10/16/blackpink_rose_photocard_1602825176_2f6ca203_progressive.jpg" } ];

  const onAdd = (cantidadVar) => {
    //setCantidad(0);
    alert("Se agregaron " + Number(cantidadVar)  +" elementos a tu compra")
  }

  
  useEffect(() => {
    var miPromise = new Promise(function(resolve, reject) {
      setTimeout(function(){
          resolve(tempItemList); 
        }, 2000);
      });
      miPromise.then(function(items)  {
        setItemList([...items]);          
      });
  }, []);
    


    return (
        <div className="marginBottom1">
           
           <ItemList itemsList={ itemList }/>
         
           <ItemCount initialStock={5} initial={0} onAdd={ onAdd}></ItemCount>
          
        </div>)
}

export default ItemListContainer;