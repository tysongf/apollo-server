module.exports = {
   Query: {
      orders: () => { return require('./orders.model').getAllOrders() }
   }
}
