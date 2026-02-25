import { ModuleFederationConfig } from '@nx/module-federation';

const EAGER_PACKAGES = ['react', 'react-dom', 'react-router', 'react-router-dom'];

const config: ModuleFederationConfig = {
  name: 'remote1',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (libraryName, sharedConfig) => {
    if (EAGER_PACKAGES.includes(libraryName)) {
      return { ...sharedConfig, eager: false };
    }
    return sharedConfig;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
