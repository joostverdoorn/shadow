(function() {
  var AbstractView, ExpandableView, NumberView, RootView, Shadow,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Shadow = {
    initialized: false,
    show: function(item, container) {
      var view;
      container || (container = document.body);
      return view = new RootView(item, container);
    },
    createView: function(item) {
      var attacher, key, view, _i, _len, _ref;
      _ref = Object.keys(Shadow.attachers).reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        attacher = Shadow.attachers[key];
        if (view = attacher(item)) {
          return view;
        }
      }
    },
    attachers: {
      number: function(item) {
        if (typeof item !== 'number') {
          return null;
        }
        return new NumberView(item);
      }
    }
  };

  AbstractView = (function() {
    AbstractView.createComponent = function(view) {
      var component, name;
      name = view.name;
      component = view.absurd.component(name, {
        html: view.html,
        css: view.css,
        constructor: function(exports) {
          this.populate();
          return rivets.bind(this.el, exports);
        }
      });
      return component;
    };

    AbstractView.absurd = Absurd();

    AbstractView.Component = AbstractView.createComponent(AbstractView);

    AbstractView.html = {
      span: "AbstractView"
    };

    AbstractView.css = {
      "font-family": "monospace",
      "display": "inline-view"
    };

    function AbstractView(exports) {
      if (exports == null) {
        exports = {};
      }
      this.exports = exports;
      this.component = this.constructor.Component(this.exports);
    }

    return AbstractView;

  })();

  ExpandableView = (function(_super) {
    __extends(ExpandableView, _super);

    function ExpandableView() {
      return ExpandableView.__super__.constructor.apply(this, arguments);
    }

    ExpandableView.Component = ExpandableView.createComponent(ExpandableView);

    return ExpandableView;

  })(AbstractView);

  NumberView = (function(_super) {
    __extends(NumberView, _super);

    NumberView.Component = NumberView.createComponent(NumberView);

    NumberView.html = {
      'span[class="number"]': "NumberView: { number}"
    };

    NumberView.css = {
      ".shadow-number-view": {
        "border": "5px solid red"
      }
    };

    function NumberView(number) {
      var exports;
      exports = {
        number: number
      };
      NumberView.__super__.constructor.call(this, exports);
    }

    return NumberView;

  })(AbstractView);

  RootView = (function(_super) {
    __extends(RootView, _super);

    RootView.component = RootView.createComponent(RootView);

    RootView.prototype.html = {
      "div": "{ view }"
    };

    RootView.prototype.css = {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "background": "rgba(0, 0, 0, .6)",
      "> .child": {
        "margin": "0 auto"
      }
    };

    function RootView(item, container) {
      var exports;
      exports = {
        view: Shadow.createView(item)
      };
      RootView.__super__.constructor.call(this, exports);
      this.container = container;
      this.container.appendChild(this.component.el);
    }

    return RootView;

  })(ExpandableView);

  rivets.binders.child = function(el, child) {
    el.innerHTML = '';
    if (child == null) {
      return;
    }
    if (child.nodeName != null) {
      return el.appendChild(child);
    }
  };

  rivets.binders.children = function(el, children) {
    var child, _i, _len, _results;
    el.innerHTML = '';
    if (children == null) {
      return;
    }
    _results = [];
    for (_i = 0, _len = children.length; _i < _len; _i++) {
      child = children[_i];
      if ((child != null ? child.nodeName : void 0) != null) {
        _results.push(el.appendChild(child));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Shadow.factory = function(exports) {
    exports._ = Shadow;
    exports.AbstractView = AbstractView;
    exports.RootView = RootView;
    exports.ExpandableView = ExpandableView;
    exports.NumberView = NumberView;
    exports.show = Shadow.show;
    exports.attachers = Shadow.attachers;
    return exports.absurd = Shadow.absurd;
  };

  if (typeof exports === 'object') {
    Shadow.factory(exports);
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function(exports) {
      Shadow.factory(this.Shadow = exports);
      return exports;
    });
  } else {
    Shadow.factory(this.Shadow = {});
  }

}).call(this);
