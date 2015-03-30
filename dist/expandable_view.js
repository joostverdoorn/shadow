(function() {
  var AbstractView, ExpandableView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  ExpandableView = (function(_super) {
    __extends(ExpandableView, _super);

    ExpandableView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view": [
          {
            "button.shadow-toggle[rv-on-click='toggle']": "+"
          }, {
            "div.shadow-expandee[rv-when='expanded']": ""
          }
        ]
      },
      css: {
        ".shadow-expandable-view": {
          "transition": "width 1s ease-in-out",
          ".shadow-toggle": {
            "cursor": "pointer"
          },
          "button.shadow-toggle": {
            "background": "rgb(100, 100, 100)",
            "color": "rgb(240, 240, 240)",
            "font-size": "16px",
            "width": "1em",
            "height": "1em",
            "padding": "0",
            "line-height": "1em",
            "text-align": "center",
            "border": "1px solid rgb(70, 70, 70)",
            "border-radius": "4px"
          }
        }
      }
    });

    function ExpandableView() {
      this.toggle = __bind(this.toggle, this);
      ExpandableView.__super__.constructor.apply(this, arguments);
      this.exports.expanded = false;
      this.exports.toggle = this.toggle;
    }

    ExpandableView.prototype.expand = function() {
      return this.exports.expanded = true;
    };

    ExpandableView.prototype.collapse = function() {
      return this.exports.expanded = false;
    };

    ExpandableView.prototype.toggle = function() {
      if (this.exports.expanded) {
        return this.collapse();
      } else {
        return this.expand();
      }
    };

    return ExpandableView;

  })(AbstractView);

  module.exports = ExpandableView;

}).call(this);

//# sourceMappingURL=expandable_view.js.map
