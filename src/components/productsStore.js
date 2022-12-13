// Cofee :  price_1MClWUEqj8va7pf9OJU5kuUJ
// Sunglasses : price_1MClYBEqj8va7pf9PdCbtexF
// Camera : price_1MClZBEqj8va7pf9MwMEFSjo

const productsArray = [

    {
        id: "price_1MClWUEqj8va7pf9OJU5kuUJ",
        title: "Coffee",
        price: 4.99

    },
    {
        id: "price_1MClYBEqj8va7pf9PdCbtexF",
        title: "Sunglasses",
        price: 43.99

    },    
    {
        id: "price_1MClZBEqj8va7pf9MwMEFSjo",
        title: "Camera",
        price: 29.99

    },

    {
        id: "4",
        title: "Solar Panel",
        price: 26.99

    },
    {
        id: "5",
        title: "Digital Camera",
        price: 34.99

    },
    
    {
        id: "6",
        title: "Laptop",
        price: 294.99

    } 
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: "+ id);
        return undefined;

    }

    return productData;
}

export { productsArray, getProductData};