import Item from "../Item/Item"
import ItemCart from "../ItemCart/ItemCart"
export default function ItemList({prods, plantilla}) {
    console.log('ItemList',prods) // MUESTRO LA LISTA
  return (
    
    <>
      {
        plantilla==="Item"
        ?
          prods.map(producto=>
            <Item item={producto}
                  key={producto.id}/> // react necesita una key unica
          )
        :
          prods.map(producto=>
            <ItemCart item={producto}
                      key={producto.id}/> // react necesita una key unica
          )
      }
        
    </>
  )
}
