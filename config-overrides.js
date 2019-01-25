const { override, addLessLoader } = require('customize-cra')
// module.exports = function override(config, env) {
module.exports = override(
  // do stuff with the webpack config...
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#000" }
  })
);