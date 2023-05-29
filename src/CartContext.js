import { createContext, useState } from "react";
import { productsArray, getProductData} from "./productsStore";

export const cartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {

    const [cartProdcuts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        cartProdcuts.find(product = product.id === id)?.quantuty

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }


    function addOneToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts(
                [...cartProdcuts, {id: id, quantity: 1}]
            )
        }else{

            setCartProducts(
                cartProdcuts.map(
                    product =>
                    product.id === id
                    ? {...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }
    


    function removeOneFromCart(id) {
       const quantity = getProductQuantity(id);

       if (quantity == 1) {
          deleteFromCart(id);
       }else{
        setCartProducts(
            setCartProducts(
                cartProdcuts.map(
                    product =>
                    product.id === id
                    ? {...product, quantity: product.quantity - 1}
                    : product
                )
            )
        )
       }

    }




    function deleteFromCart(id) {

        setCartProducts(
            cartProdcuts => 
            cartProdcuts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )

    }



    function getTotalCost() {
        let totalCost = 0;
        cartProdcuts.map((cartItem) => {
            
        })
    }





    const contextValue = {
        items: cartProdcuts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>
    );

}

