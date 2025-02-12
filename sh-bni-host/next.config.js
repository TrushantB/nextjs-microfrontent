const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
            remote1: 'remote1@http://localhost:3001/remote.js', // remote1
            remote2: 'remote2@http://localhost:3002/remote.js', // remote2
            remote3: 'remote3@http://localhost:3003/remote.js', // remote3
          },
          filename: 'static/chunks/remoteEntry.js',
        })
      );
    }

    return config;
  },
};
