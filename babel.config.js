// babel.config.js
 module.exports = {
   presets: [['@babel/preset-env', {
     targets: {
       node: 'current',
     },
   }]],
   env: {
     test: {
       presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
       plugins: ['@babel/plugin-proposal-class-properties'],
     },
   },
 };
