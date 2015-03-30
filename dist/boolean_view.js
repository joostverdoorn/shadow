(function() {
  var AbstractView, BooleanView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  BooleanView = (function(_super) {
    __extends(BooleanView, _super);

    function BooleanView() {
      return BooleanView.__super__.constructor.apply(this, arguments);
    }

    BooleanView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-boolean-view": "{ item }"
      },
      css: {
        ".shadow-boolean-view": {
          "color": "#ef2929"
        }
      }
    });

    return BooleanView;

  })(AbstractView);

  module.exports = BooleanView;

}).call(this);

//# sourceMappingURL=boolean_view.js.map
