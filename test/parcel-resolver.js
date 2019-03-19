const path = require('path');

module.exports = (name, info) => {
  if (name.indexOf('/') === 0 && info.rootDir !== undefined) {
    return path.join(info.rootDir, name + '.js');
  }
  return info.defaultResolver(name, info);
};
