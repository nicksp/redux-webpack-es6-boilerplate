if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.production').default;
}
else {
  module.exports = require('./configureStore.development').default;
}
