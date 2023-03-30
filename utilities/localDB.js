const addToCart = (id) =>{
    let shoppingCart;

    // check the shopping cart exist or not
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};   
    }

    // add items with quantity in shopping cart
    // check if the item exist or not and get the quantity if exists
    const storedQuantity = shoppingCart[id];
    if(storedQuantity){
        const updateQuantity = storedQuantity + 1;
        shoppingCart[id] = updateQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    // set shopping cart in local storage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}



const getStoredData = () =>{
    const storedData = localStorage.getItem('shopping-cart');
    const storeDataObject = JSON.parse(storedData);
    return storeDataObject;
}



export {addToCart, getStoredData};
