(function() {
  var factories;

  factories = require('./factories');

  module.exports = function(item) {
    var factory, view, _i, _len;
    for (_i = 0, _len = factories.length; _i < _len; _i++) {
      factory = factories[_i];
      if (view = factory(item)) {
        return view;
      }
    }
  };

}).call(this);

//# sourceMappingURL=factory.js.map
