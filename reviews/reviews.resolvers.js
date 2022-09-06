
const reviewsModel = require('./reviews.model');

module.exports = {
   Query: {
      reviews: () => { return reviewsModel.getAllReviews() }
   }
}
