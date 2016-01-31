# React + Redux w/ ES6 Starter Project

A boilerplate using React, Redux, webpack + hot module reloading, and ES6 + JSX via Babel.

The provided boilerplate enables client-side ES6 via the following technologies:

- [webpack](http://webpack.github.io/) and [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) as a client-side module builder and module loader.
- [npm](https://www.npmjs.com/) as a package manager and task runner (say [**NO**](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/) to gulp/grunt).
- [Babel](http://babeljs.io/) 6 as a transpiler from ES6 to ES5.
- [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) as a virtual Dom JavaScript library for rendering user interfaces (views).
- [Redux](http://redux.js.org/) as an incredibly simple way of modelling your data app state, with great community support.

## Getting Started

### Installation

```
git clone https://github.com/nicksp/redux-webpack-es6-boilerplate.git app-name
cd app-name
npm i
```

### White Label It

- Update name, desription, author, repository in `package.json`
- Update app title in `src/index.html`


## Development

There are two ways in which you can build and run the web app:

* Build once:
  * `npm run build`
  * Open `build/index.html`
* Hot reloading via webpack dev server:
  * `npm start`
  * Go to `http://localhost:8080/`, page reloads automatically when there are changes

## TODO

- Watch `styles` and `index.html` for changes and copy them across to `build` when appropriate
- Add `production` and `dev` webpack configurations and relevant `npm` tasks.

## License

[MIT](http://opensource.org/licenses/MIT)

Brought to you by Nick S. Plekhanov
