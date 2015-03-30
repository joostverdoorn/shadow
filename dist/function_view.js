(function() {
  var EnumerableView, FunctionView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  EnumerableView = require('./enumerable_view');

  FunctionView = (function(_super) {
    __extends(FunctionView, _super);

    FunctionView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view .shadow-enumerable-view .shadow-function-view": {
          "table": [
            {
              "thead[rv-on-click='toggle']": {
                "tr": {
                  "td[colspan='2']": "function { name }"
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
      }
    });

    function FunctionView(item) {
      var _base;
      this.exports || (this.exports = {});
      (_base = this.exports).name || (_base.name = item.name);
      FunctionView.__super__.constructor.call(this, item);
    }

    return FunctionView;

  })(EnumerableView);

  module.exports = FunctionView;

}).call(this);

//# sourceMappingURL=function_view.js.map
