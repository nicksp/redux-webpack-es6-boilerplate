If you are working with **third-party** modules, you will need to install type definitions before you can import them. The best way to get third-party type definitions is using [`flow-typed`](https://github.com/flowtype/flow-typed).

```sh
$ npm install -g flow-typed
```

You can search and install type definitions using this binary (`flow-typed` cli) from inside `/config/flow` directory.

```sh
$ flow-typed search redux
$ flow-typed install -f 0.31 redux
```
