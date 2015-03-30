(function() {
  var ExpandableView, RootView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ExpandableView = require('./expandable_view');

  RootView = (function(_super) {
    __extends(RootView, _super);

    function RootView() {
      return RootView.__super__.constructor.apply(this, arguments);
    }

    RootView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view .shadow-root-view .shadow-expandee": {
          "div.child[rv-view='item']": ""
        }
      },
      css: {
        ".shadow-root-view": {
          "&.shadow-expandee, >.shadow-expandee": {
            "color": "pink",
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background": "rgba(0, 0, 0, .6)",
            "text-align": "center"
          },
          "&.child, >.child": {
            "padding": ".5em",
            "display": "inline-block",
            "background-color": "#2e3436"
          }
        }
      }
    });

    return RootView;

  })(ExpandableView);

  module.exports = RootView;

}).call(this);

//# sourceMappingURL=root_view.js.map
