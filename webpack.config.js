/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

module.exports = function configFactory(env) {
  return require(`./config/webpack/${env}.js`);
};
