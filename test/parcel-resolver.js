const path = require('path');

module.exports = (name, info) => {
  if (name.indexOf('/') === 0 && info.rootDir !== undefined) {
    return require.resolve(path.join(info.rootDir, name));
  }
  return info.defaultResolver(name, info);
};
