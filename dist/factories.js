(function() {
  var factories;

  factories = {
    object: function(item) {
      var EnumerableView;
      if (typeof item !== 'object') {
        return null;
      }
      EnumerableView = require('./enumerable_view');
      return new EnumerableView(item);
    },
    "function": function(item) {
      var FunctionView;
      if (typeof item !== 'function') {
        return null;
      }
      FunctionView = require('./function_view');
      return new FunctionView(item);
    },
    array: function(item) {
      var EnumerableView;
      if (!(item instanceof Array)) {
        return null;
      }
      EnumerableView = require('./enumerable_view');
      return new EnumerableView(item);
    },
    undefined: function(item) {
      var UndefinedView;
      if (typeof item !== 'undefined') {
        return null;
      }
      UndefinedView = require('./undefined_view');
      return new UndefinedView(item);
    },
    "null": function(item) {
      var NullView;
      if (item !== null) {
        return null;
      }
      NullView = require('./null_view');
      return new NullView(item);
    },
    boolean: function(item) {
      var BooleanView;
      if (typeof item !== 'boolean') {
        return null;
      }
      BooleanView = require('./boolean_view');
      return new BooleanView(item);
    },
    number: function(item) {
      var NumberView;
      if (typeof item !== 'number') {
        return null;
      }
      NumberView = require('./number_view');
      return new NumberView(item);
    },
    string: function(item) {
      var StringView;
      if (typeof item !== 'string') {
        return null;
      }
      StringView = require('./string_view');
      return new StringView(item);
    }
  };

  module.exports = Object.keys(factories).reverse().map(function(key) {
    return factories[key];
  });

}).call(this);

//# sourceMappingURL=factories.js.map
