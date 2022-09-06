module.exports = {
   Query: {
      countries: () => { return require('./countries.model').getAllCountries() },
      regions: () => { return require('./regions.model').getAllRegions() },
      cities: () => { return require('./cities.model').getAllCities() },
   }
}
