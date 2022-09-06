
function getAllOrders() {
   return [
      {
         date: '2012-12-21',
         subtotal: 99.90,
         items: [
            {
               product: {
                  id: 'redshoe',
                  description: 'An old red shoe',
                  price: 33.95,
               },
               qty: 1
            }
         ]
      }
   ];
}

module.exports = {
   getAllOrders,
}
