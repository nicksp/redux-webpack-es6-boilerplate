function noop() {
  return null;
}

require.extensions['.styl'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.less'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.png'] = noop;
require.extensions['.woff'] = noop;
