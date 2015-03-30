(function() {
  var AbstractView, UndefinedView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  UndefinedView = (function(_super) {
    __extends(UndefinedView, _super);

    function UndefinedView() {
      return UndefinedView.__super__.constructor.apply(this, arguments);
    }

    UndefinedView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-undefined-view": "undefined"
      },
      css: {
        ".shadow-undefined-view": {
          "color": "#fcaf3e"
        }
      }
    });

    return UndefinedView;

  })(AbstractView);

  module.exports = UndefinedView;

}).call(this);

//# sourceMappingURL=undefined_view.js.map
