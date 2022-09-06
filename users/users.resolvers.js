module.exports = {
   Query: {
      users: () => { return require('./user.model').getAllUsers() }
   }
}
