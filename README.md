# React + Redux w/ ES6 Starter Project

A boilerplate using the power and simplicity of React, Redux, Webpack 2 + HMR, and ES6 + JSX via Babel. Includes `tree shaking` configuration.

The provided boilerplate enables client-side ES6 via the following technology stack:

- [x] [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) — a virtual DOM JavaScript library for rendering UI.  It's about rendering view as a function of state, making JavaScript-driven UI declarative the way HTML is declarative.
- [x] [Redux](http://redux.js.org/) — an incredibly simple way of modelling your data app state, with great community support
- [x] [Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7) and [dev middleware](https://github.com/webpack/webpack-dev-middleware) — client-side module builder and module loader
- [x] [React Hot Loader 3](https://github.com/gaearon/react-hot-boilerplate/pull/61) — combines the best of React Hot Loader and React Transform and fixes some [long-standing issues](https://twitter.com/dan_abramov/status/722040946075045888)
- [ ] [React Router v3](https://github.com/reactjs/react-router/blob/next/CHANGES.md) — to allow [dynamic routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux) — simple bindings to keep React Router and Redux in sync
- [ ] [Flow](https://flowtype.org/docs/getting-started.html) — static type checker for JavaScript aimed at catching common bugs in JavaScript programs
- [x] [npm](https://www.npmjs.com/) — package manager and task runner
- [x] [Babel 6](http://babeljs.io/) — transpiler from ES6 / JSX to ES5
- [x] [PostCSS](http://postcss.org/) — ecosystem of custom plugins and tools aimed at transforming extended syntaxes and features into modern, browser-friendly CSS
- [x] [CSS Modules](https://github.com/css-modules/css-modules) — guarantee that all the styles for a single component, designed to fix the problem of the global scope in CSS
- [x] [Redux DevTools](https://github.com/gaearon/redux-devtools) — a live-editing environment for your Redux apps (as a [browser extension](https://github.com/zalmoxisus/redux-devtools-extension))
- [x] [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard) — CLI dashboard for your Webpack dev server
- [ ] [React Intl](https://github.com/yahoo/react-intl) — internationalization for React projects
- [x] [ESLint](http://eslint.org/docs/user-guide/configuring) — reporter for syntax and style issues
- [x] [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) — additional React specific linting rules
- [x] [Sass](http://sass-lang.com/) — compiler of CSS styles with variables, mixins, and more
- [x] [Mocha](https://mochajs.org/) — well-known and flexible test framework that you can use to run your JavaScript tests on the server or in the browser
- [ ] [Enzyme](http://airbnb.io/enzyme/) — makes unit testing React components an absolute pleasure
- [x] [Chai](http://chaijs.com/) — BDD assertion library that works along with `Mocha`

## Getting Started

### Prerequisites

Support for Node.js > 5

### Installation

```
$ git clone https://github.com/nicksp/redux-webpack-es6-boilerplate.git app-name
$ cd app-name
$ npm install
```

### White Label It

- Update name, description, author, repository in `package.json`
- Update app title in `src/index.html`


## Development

There are two ways in which you can build and run the web app:

* Build once for (ready for ***Production***):
  * `$ npm run build`
  * Open `build/index.html` through the local webserver


* Hot reloading via webpack dev server:
  * `$ npm start`
  * Point your browser to http://localhost:3000/, page hot reloads automatically when there are changes

## Testing

To execute all unit tests, use:

```sh
npm run test
```

To run unit tests continuously during development (watch tests), use:

```sh
npm run test:watch
```

## Debugging

For debugging purposes please use:
- [Redux DevTools
](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) plugin for Chrome to simplify debugging React apps.
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## FAQ

### What's this for?

This starter kit implements best practices like testing (`unit testing`), minification, bundling, and so on. It saves you from the long, painful process of wiring it all together into an automated dev environment and build process.

### What's happening under the hood when I run `npm start`?

Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is `/src`, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to `/build` folder and the app is served from `/build`.

### How is Sass being processed?

We're handling it differently in DEV vs PROD.

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into app.js. Sounds weird, but it works!
 3. app.js contains code that loads styles into the &lt;head&gt; section of index.html via JavaScript. This is why there is no stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into app.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

### How do I deploy this?

`npm run build`. This will prepare and build the project for production use. It does the following:

- Minifies all JS and CSS
- Inline base64 URLs for images and fonts if their size is less than specified limit
- Sets NODE_ENV to `production` so that React is built in production mode
- Places the resulting built project files into `/build` directory. (This is the folder you'll expose to the world).

## TODO

- [ ] Watch `index.html` for changes
- [x] Add an ability to test React components using Karma and Jasmine
- [ ] Make a lightweight version of boilerplate (exclude Redux support?)

## License

[MIT License](https://tldrlegal.com/license/mit-license), 2016

Brought to you by Nick S. Plekhanov
