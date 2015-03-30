(function() {
  var Shadow, factory;

  factory = require('./factory');

  require('./utils/rivets_shadow');

  Shadow = function() {
    return factory.apply(null, arguments);
  };

  Shadow.createRootView = function(item) {
    Shadow.rootView = new Shadow.RootView(item);
    return document.body.appendChild(Shadow.rootView.element);
  };

  Shadow.show = function(item) {
    if (Shadow.rootView != null) {
      return Shadow.rootView.exports.item = item;
    } else {
      return Shadow.createRootView(item);
    }
  };

  Shadow.init = function() {
    return document.onkeyup = (function(_this) {
      return function(event) {
        if (event.which === 192) {
          _this.show(Shadow.AbstractView);
          return _this.rootView.toggle();
        }
      };
    })(this);
  };

  Shadow.factories = require('./factories');

  Shadow.AbstractView = require('./abstract_view');

  Shadow.NullView = require('./null_view');

  Shadow.UndefinedView = require('./undefined_view');

  Shadow.BooleanView = require('./boolean_view');

  Shadow.StringView = require('./string_view');

  Shadow.FunctionView = require('./function_view');

  Shadow.EnumerableView = require('./enumerable_view');

  Shadow.ExpandableView = require('./expandable_view');

  Shadow.RootView = require('./root_view');

  module.exports = Shadow;

}).call(this);

//# sourceMappingURL=shadow.js.map
