module.exports = {
   Query: {
      addresses: () => { return require('./addresses.model').getAllAddresses() }
   }
}
