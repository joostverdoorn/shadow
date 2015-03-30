(function() {
  var AbstractView, NullView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  NullView = (function(_super) {
    __extends(NullView, _super);

    function NullView() {
      return NullView.__super__.constructor.apply(this, arguments);
    }

    NullView.setComponent({
      html: {
        "div.shadow-null-view .shadow-undefined-view": "null"
      },
      css: {
        ".shadow-null-view": {
          "color": "#fcaf3e"
        }
      }
    });

    return NullView;

  })(AbstractView);

  module.exports = NullView;

}).call(this);

//# sourceMappingURL=null_view.js.map
