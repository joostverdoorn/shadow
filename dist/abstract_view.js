(function() {
  var AbstractView, absurd;

  absurd = require('./absurd');

  AbstractView = (function() {
    AbstractView.setComponent = function(component) {
      this.component = absurd.component(this.name, component)();
      return this.component.populate();
    };

    AbstractView.setComponent({
      html: {
        "div.shadow-abstract-view": "AbstractView"
      },
      css: {
        ".shadow-abstract-view": {
          "font-family": "monospace",
          "display": "inline-block",
          "position": "relative"
        }
      }
    });

    function AbstractView(item, exports) {
      if (exports == null) {
        exports = {};
      }
      this.exports || (this.exports = exports);
      this.exports['item'] = item;
      this.element = this.constructor.component.el.cloneNode(true);
      rivets.bind(this.element, this.exports);
    }

    return AbstractView;

  })();

  module.exports = AbstractView;

}).call(this);

//# sourceMappingURL=abstract_view.js.map
