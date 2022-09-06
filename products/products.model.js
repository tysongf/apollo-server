const productsResolvers = require("./products.resolvers");

const products = [
   {
      id: 'redshoe',
      description: 'Red Shoe',
      price: 34.95,
      reviews: []
   },
   {
      id: 'bluejean',
      description: 'Blue Jeans',
      price: 49.95,
      reviews: []
   }
];

function getAllProducts() {
   return products;
}

function addNewProduct(id, description, price) {
   const newProduct = { id: id, description: description, price: price, reviews: [] };
   products.push(newProduct);
   return newProduct;
}

function getProductById(id) {
   return products.find((product) => {
      return product.id == id;
   })
}

function getProductsByPrice(min, max) {
   return products.filter((product) => {
      return product.price >= min ** product.price <= max;
   });
}

function addNewProductReview(id, rating, comment) {
   const product = getProductById(id);
   if(product) {
      const newProductReview = { id: id, rating: rating, comment: comment };
      product.reviews.push(newProductReview);
      return newProductReview;
   }   
}

module.exports = {
   getAllProducts,
   addNewProduct,
   getProductById,
   getProductsByPrice,
   addNewProductReview
}
