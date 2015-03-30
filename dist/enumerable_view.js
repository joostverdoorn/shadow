(function() {
  var EnumerableView, ExpandableView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ExpandableView = require('./expandable_view');

  EnumerableView = (function(_super) {
    __extends(EnumerableView, _super);

    EnumerableView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view .shadow-enumerable-view": {
          "table": [
            {
              "thead[rv-on-click='toggle']": {
                "tr": {
                  "td[colspan='2']": "{ name }"
                }
              }
            }, {
              "tbody[rv-if='expanded']": {
                "tr[rv-each-entry='item']": [
                  {
                    "td.key[rv-text='index']": ""
                  }, {
                    "td.value[rv-view='entry']": ""
                  }
                ]
              }
            }
          ]
        }
      },
      css: {
        ".shadow-enumerable-view": {
          "box-shadow": "0 0 .5em rgba(0, 0, 0, .3)",
          "max-height": "100%",
          "overflow-x": "overlay",
          "text-align": "left",
          "color": "#d3d7cf",
          "> table": {
            "min-width": "100%",
            "border-spacing": "0",
            "border-collapse": "collapse",
            "> * > tr": {
              "> td": {
                "margin": "0",
                "padding": ".5em"
              }
            },
            "> thead": {
              "color": "#eeeeec",
              "background-color": "#3465a4"
            },
            "> tbody": {
              "> tr": {
                "&:nth-child(even)": {
                  "background": "rgba(0, 0, 0, .1)"
                },
                "&:nth-child(odd)": {
                  "background": "rgba(255, 255, 255, .05)"
                },
                "> td": {
                  "vertical-align": "top",
                  "&.key": {
                    "text-align": "right",
                    "color": "#729fcf"
                  },
                  "&.value": {
                    "color": "blue"
                  }
                }
              }
            }
          }
        }
      }
    });

    function EnumerableView(item) {
      var _base;
      this.exports || (this.exports = {});
      (_base = this.exports).name || (_base.name = item.constructor.name);
      this.exports.toggleEditable = this.toggleEditable;
      EnumerableView.__super__.constructor.call(this, item);
    }

    EnumerableView.prototype.toggleEditable = function(event) {
      return event.srcElement.parentElement.setAttribute('data-editable');
    };

    return EnumerableView;

  })(ExpandableView);

  module.exports = EnumerableView;

}).call(this);

//# sourceMappingURL=enumerable_view.js.map
