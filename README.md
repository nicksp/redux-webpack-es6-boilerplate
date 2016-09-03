# React + Redux w/ ES6 Starter Project

**:tada: A Completely updated version of my initial boilerplate :rocket:**

*Note: If you still want to use a previous version, please checkout `old-original-structure` branch.*

A boilerplate using the power and simplicity of React, Redux, Webpack 2 + HMR, and ES6 + JSX via Babel. Includes `Webpack's Tree Shaking` configuration. It's suitable for scalable applications and organized using the custom variation of [the Ducks pattern](https://github.com/nicksp/ducks-modular-redux) — approach when each module's entry file (`feature-name.js`) contains all of its related constants, actions/action creators, selectors and its reducer.

The provided boilerplate is powered by the following technology stack:

- [x] [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) — a virtual DOM JavaScript library for rendering UI.  It's about rendering view as a function of state, making JavaScript-driven UI declarative the way HTML is declarative.
- [x] [Redux](http://redux.js.org/) — an incredibly simple way of modelling your data app state, with great community support
- [x] [Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7) and [dev middleware](https://github.com/webpack/webpack-dev-middleware) — client-side module builder and module loader
- [x] [React Hot Loader 3](https://github.com/gaearon/react-hot-boilerplate/pull/61) — combines the best of React Hot Loader and React Transform and fixes some [long-standing issues](https://twitter.com/dan_abramov/status/722040946075045888)
- [ ] [React Router v3](https://github.com/reactjs/react-router/blob/next/CHANGES.md) — to allow [dynamic routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux) — simple bindings to keep React Router and Redux in sync
- [x] [Reselect](https://github.com/reactjs/reselect) — provides a way to access Redux state in components and build composable selectors that are automatically memoized
- [x] [Flow](https://flowtype.org/docs/getting-started.html) — static type checker for JavaScript aimed at catching common bugs in JavaScript programs. The flow type annotations get ripped out of the source by the webpack build step. You have no obligation to use flow within your code and can even uninstall the dependency (`flow-bin`) without breaking the project.
- [x] [npm](https://www.npmjs.com/) — package manager and task runner
- [x] [Babel 6](http://babeljs.io/) — transpiler from ES6 / JSX to ES5
- [x] [PostCSS](http://postcss.org/) — ecosystem of custom plugins and tools aimed at transforming extended syntaxes and features into modern, browser-friendly CSS
- [x] [CSS Modules](https://github.com/css-modules/css-modules) — guarantee that all the styles for a single component, designed to fix the problem of the global scope in CSS
- [x] [Redux DevTools](https://github.com/gaearon/redux-devtools) — a live-editing environment for your Redux apps (and as a [browser extension](https://github.com/zalmoxisus/redux-devtools-extension))
- [x] [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard) — CLI dashboard for your Webpack dev server
- [ ] [React Intl](https://github.com/yahoo/react-intl) — internationalization for React projects
- [x] [ESLint](http://eslint.org/docs/user-guide/configuring) — reporter for syntax and style issues
- [x] [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) & [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype) — additional React/Flow type specific linting rules for ESLint
- [x] [Sass](http://sass-lang.com/) — compiler of CSS styles with variables, mixins, and more
- [x] [Mocha](https://mochajs.org/) — well-known and flexible test framework that you can use to run your JavaScript tests on the server or in the browser
- [ ] [Enzyme](http://airbnb.io/enzyme/) — makes unit testing React components an absolute pleasure
- [x] [Chai](http://chaijs.com/) — BDD assertion library that works along with `Mocha`
- [x] [Sentry](https://sentry.io/) — real-time error tracking for your app

## Getting Started

### Prerequisites

Support for Node.js > 5

### Installation

```sh
$ git clone https://github.com/nicksp/redux-webpack-es6-boilerplate.git app-name
$ cd app-name
$ npm install
```

### White Label It

- Update name, description, author, repository in `package.json`
- Update app title in [`src/client/assets/index.html`](src/client/assets/index.html)


## Development

There are two ways in which you can build and run the web app:

* Build once for (ready for ***Production***):
  * `$ npm run build`
  * `$ npm run build:serve`

  The last command will boot up HTTP server on `3003` port and serve `build/client` directory in a default browser

* Hot reloading via webpack middlewares:
  * `$ npm start`
  * Point your browser to http://localhost:3000/, page hot reloads automatically when there are changes

## Testing

**(TBD)**

To execute all unit tests, use:

```sh
$ npm run test
```

To run unit tests continuously during development (watch tests), use:

```sh
$ npm run test:watch
```

## Expose App on Your Local Dev Machine

Assign yourself a unique publicly accessible url that will proxy all requests to your locally running webserver.

```sh
$ npm install -g localtunnel
$ npm start
$ npm run tunnel # run in a new tab
```

You will receive a url, for example `https://tbst.localtunnel.me`, that you can share with anyone for as long as your local instance of `lt` remains active. Any requests will be routed to your local service at the specified port.

## Error Tracking and Insights with Sentry

In order to get info on errors that happened in production, we integrate [Sentry](https://sentry.io/for/javascript/) into our application to track errors and get context on what happened.

To use it on your side, configure it first:

* Create account at [https://sentry.io/signup/](https://sentry.io/signup/)
* Add new project for your app on Sentry website
* In `/src/client/assets/javascripts/app/config.js` file assign `SENTRY_KEY` and `SENTRY_APP` constants values that you got after adding a new project
* Don't forget to define `Allowed Domains` section under your `Project Settings` on Sentry website to track errors from required domains

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
- [ ] Setup test environment for React components using Enzyme, Mocha and Karma
- [ ] Add support for React Intl
- [ ] Add support for dynamic routing (`code splitting`)
- [ ] Update `FAQ` section to reflect latest greatest changes
- [ ] Add more Flow type annotations incrementally to allow Flow to validate more code, and gradually increase Flow’s coverage of the codebase
- [ ] Integrate Material Design or Bootstrap
- [ ] Check if PostCSS integration works
- [ ] Apply more best practices to how code is organized and written
- [ ] Add section about available `npm` scripts
- [ ] Any more ideas?

## License

[MIT License](https://nicksp.mit-license.org/), 2016

Brought to you by Nick S. Plekhanov
