(function() {
  var AbstractView, ExpandableView, NumberView, RootView, Shadow,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = (function() {
    AbstractView.absurd = Absurd();

    AbstractView.addStyle = function(style) {
      this.absurd.add(style).compile();
      return style;
    };

    AbstractView.className = "abstract-view";

    AbstractView.html = 'AbstractView html';

    function AbstractView(item) {
      this.element = this._createElement();
      this.exports = {};
      rivets.bind(this.element, this.exports);
    }

    AbstractView.prototype._createElement = function() {
      var element;
      element = document.createElement('div');
      element.innerHTML = this.constructor.html;
      element.setAttribute('style', this.constructor.className);
      return element;
    };

    return AbstractView;

  })();

  ExpandableView = (function(_super) {
    __extends(ExpandableView, _super);

    function ExpandableView() {
      return ExpandableView.__super__.constructor.apply(this, arguments);
    }

    return ExpandableView;

  })(AbstractView);

  NumberView = (function(_super) {
    __extends(NumberView, _super);

    NumberView.className = "number-view";

    NumberView.style = NumberView.absurd.add({
      ".number-view": {
        "border": "1px solid white"
      }
    });

    NumberView.html = '<span class="number">Number: { number }</span>';

    function NumberView(number) {
      NumberView.__super__.constructor.call(this, number);
      this.number = this.exports.number = number;
    }

    return NumberView;

  })(AbstractView);

  RootView = (function(_super) {
    __extends(RootView, _super);

    RootView.className = "root-view";

    RootView.style = RootView.addStyle({
      ".root-view": {
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "background": "rgba(0, 0, 0, .6)",
        ".child": {
          "margin": "0 auto"
        }
      }
    });

    RootView.html = '<div class="child" rv-child="view.element"></div>';

    function RootView(item, container) {
      RootView.__super__.constructor.call(this, item);
      this.exports.view = Shadow.createView(item);
      this.container = container;
      this.container.appendChild(this.element);
    }

    return RootView;

  })(ExpandableView);

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
    },
    init: function() {
      return AbstractView.absurd.compile();
    }
  };

  Shadow.init();

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

}).call(this);
