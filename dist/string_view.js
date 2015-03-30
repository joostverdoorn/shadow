(function() {
  var AbstractView, StringView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

  StringView = (function(_super) {
    __extends(StringView, _super);

    function StringView() {
      return StringView.__super__.constructor.apply(this, arguments);
    }

    StringView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-string-view": "\"{ item }\""
      },
      css: {
        ".shadow-string-view": {
          "color": "#fce94f",
          "max-width": "10em"
        }
      }
    });

    return StringView;

  })(AbstractView);

  module.exports = StringView;

}).call(this);

//# sourceMappingURL=string_view.js.map
