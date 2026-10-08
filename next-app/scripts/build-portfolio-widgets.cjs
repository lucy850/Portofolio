const path = require('node:path');
const { build } = require('esbuild');

const root = path.resolve(__dirname, '../..');
const appNodeModules = path.resolve(__dirname, '../node_modules');

build({
  absWorkingDir: root,
  entryPoints: [path.resolve(__dirname, '../components/PortfolioWidgets.jsx')],
  outfile: path.resolve(root, 'assets/js/portfolio-react-widgets.js'),
  bundle: true,
  minify: true,
  platform: 'browser',
  format: 'iife',
  target: ['es2018'],
  jsx: 'automatic',
  alias: {
    react: path.join(appNodeModules, 'react'),
    'react-dom': path.join(appNodeModules, 'react-dom')
  },
  plugins: [
    {
      name: 'ignore-component-css',
      setup(buildApi) {
        buildApi.onResolve({ filter: /\.css$/ }, args => ({ path: args.path, namespace: 'component-css' }));
        buildApi.onLoad({ filter: /.*/, namespace: 'component-css' }, () => ({ contents: '', loader: 'js' }));
      }
    }
  ],
  logLevel: 'info'
}).catch(error => {
  console.error(error);
  process.exitCode = 1;
});
