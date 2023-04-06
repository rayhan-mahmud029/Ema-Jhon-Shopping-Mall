import { getStoredData } from "../../utilities/localDB";

const loadAllProducts = async() =>{
    const resp = await fetch('products.json')
    const data = await resp.json();

    // get stored cart data id
    const storedProducts = getStoredData();
    let addedProds = [];
    
    
    // find and add stored prods
    for (const prodID in storedProducts){
        const addedProd = data.find(product => product.id === prodID);

        if (addedProd){
            const addedQuantity = storedProducts[prodID];
            console.log(addedQuantity);
            addedProd.quantity = addedQuantity;
            addedProds.push(addedProd)
        }
    }
    console.log(addedProds);


    return addedProds;
}

export default loadAllProducts;
