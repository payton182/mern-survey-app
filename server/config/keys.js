if (process.env.NODE_ENV === 'production') {
  //enter prod keys
} else {
  module.exports = require('./dev');
}
