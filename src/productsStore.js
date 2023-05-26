const productsArray = [

    {
        id: "1",
        title: "Coffee",
        price: 4.99,
        img: "./images/coffee.png"
    },
    {
        id: "2",
        title: "Sunglasses",
        price: 9.99,
        img: "./images/glasses.png"
    },
    {
        id: "3",
        title: "Camera",
        price: 39.99,
        img: "./images/camera.png"
    },
    {
        id: "4",
        title: "Laptop",
        price: 300.99,
        img: "./images/laptop.png"
    },
    {
        id: "5",
        title: "Shoe",
        price: 80.99,
        img: "./images/shoe.png"

    },
    {
        id: "6",
        title: "Shirt",
        price: 50.99,
        img: "./images/shirt.png"
    },
]


function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if(productData == undefined) {
     console.log("Product data does not exist for ID" + id);
     return undefined;
  }

  return productData;
}


export { productsArray, getProductData };