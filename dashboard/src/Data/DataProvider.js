import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/lists`)
            .then(res => res.json())
            .then(products => {
                setProducts(products)
            })
    },[])
    
    // const [cart, setCart] = useState([])

    // const addCart = (id) =>{
    //     const check = cart.every(item =>{
    //         return item._id !== id
    //     })
    //     if(check){
    //         const data = products.filter(product =>{
    //             return product._id === id
    //         })
    //         setCart([...cart, ...data])
    //     }else{
    //         alert("The product has been added to cart.")
    //     }
    // }

    // useEffect(() =>{
    //    const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
    //    if(dataCart) setCart(dataCart)
    // },[])

    // useEffect(() =>{
    //     localStorage.setItem('dataCart', JSON.stringify(cart))
    // },[cart])


    const value = {
        products: [products, setProducts],
        // cart: [cart, setCart],
        // addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
