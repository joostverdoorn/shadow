(function() {
  var AbstractView, ExpandableView, NumberView, RootView, Shadow,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Shadow = {
    absurd: Absurd(),
    create: function() {},
    listen: function() {
      var create, destroy, results;
      results = Emerald.Sonic.create(event.results).pluck('0').pluck('transcript');
      create = results.find(function(value) {
        return value.indexOf('hello shadow') > -1;
      });
      destroy = results.find(function(value) {
        return value.indexOf('goodbye shadow') > -1;
      });
      if (create) {
        return Shadow.show(3).expand();
      } else if (destroy) {
        return Shadow.rootView.collapse();
      }
    },
    createRootView: function(item) {
      Shadow.rootView = new RootView(item);
      return document.body.appendChild(Shadow.rootView.element);
    },
    show: function(item) {
      var view;
      if (Shadow.rootView != null) {
        view = Shadow.createView(item);
        Shadow.rootView.exports.view = view;
      } else {
        Shadow.createRootView(item);
        view = Shadow.rootView.exports.view;
      }
      return view;
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
      return document.onkeyup = (function(_this) {
        return function(event) {
          console.log(event);
          if (event.which === 192) {
            _this.show(3);
            return _this.rootView.toggle();
          }
        };
      })(this);
    }
  };

  Shadow.init.call(Shadow);

  AbstractView = (function() {
    AbstractView.Component = Shadow.absurd.component(AbstractView.name, {
      html: {
        "div.shadow-abstract-view": "AbstractView"
      },
      css: {
        ".shadow-abstract-view": {
          "font-family": "monospace",
          "display": "inline-block",
          "width": "200px"
        }
      }
    });

    AbstractView.Component().populate();

    function AbstractView(item) {
      this.exports = {};
      this.component = this.constructor.Component();
      this.component.populate();
      rivets.bind(this.component.el, this.exports);
      this.element = this.component.el;
    }

    return AbstractView;

  })();

  ExpandableView = (function(_super) {
    __extends(ExpandableView, _super);

    ExpandableView.Component = Shadow.absurd.component(ExpandableView.name, {
      html: {
        "div.shadow-abstract-view .shadow-expandable-view": {
          "div.expander": ""
        }
      },
      css: {
        ".shadow-expandable-view": {
          "&.expander, >.expander": {
            "&:not([data-expanded='true'])": {
              "height": "0",
              "overflow": "hidden"
            }
          }
        }
      }
    });

    ExpandableView.Component().populate();

    function ExpandableView() {
      ExpandableView.__super__.constructor.apply(this, arguments);
      this.expanded = false;
      if (this.element.className.indexOf('expander') !== -1) {
        this.expander = this.element;
      } else {
        this.expander = this.element.getElementsByClassName('expander')[0];
      }
    }

    ExpandableView.prototype.expand = function() {
      this.expander.setAttribute('data-expanded', true);
      return this.expanded = true;
    };

    ExpandableView.prototype.collapse = function() {
      this.expander.removeAttribute('data-expanded');
      return this.expanded = false;
    };

    ExpandableView.prototype.toggle = function() {
      if (this.expanded) {
        return this.collapse();
      } else {
        return this.expand();
      }
    };

    return ExpandableView;

  })(AbstractView);

  NumberView = (function(_super) {
    __extends(NumberView, _super);

    NumberView.Component = Shadow.absurd.component(NumberView.name, {
      html: {
        "div.shadow-abstract-view .shadow-number-view": "Number: { number }"
      },
      css: {
        ".shadow-number-view": {
          "border": "5px solid blue"
        }
      }
    });

    NumberView.Component().populate();

    function NumberView(number) {
      NumberView.__super__.constructor.call(this, number);
      this.number = this.exports.number = number;
    }

    return NumberView;

  })(AbstractView);

  RootView = (function(_super) {
    __extends(RootView, _super);

    RootView.Component = Shadow.absurd.component(RootView.name, {
      html: {
        "div.shadow-abstract-view .shadow-expandable-view .shadow-root-view .expander": {
          "div.child[rv-child='view.element']": ""
        }
      },
      css: {
        ".shadow-root-view": {
          "&.expander, >.expander": {
            "&[data-expanded='true']": {
              "color": "pink",
              "position": "absolute",
              "top": "0",
              "left": "0",
              "width": "100%",
              "height": "100%",
              "background": "rgba(0, 0, 0, .6)",
              "text-align": "center"
            }
          },
          "&.child, >.child": {
            "> *": {
              "background-color": "green"
            }
          }
        }
      }
    });

    RootView.Component().populate();

    function RootView(item) {
      RootView.__super__.constructor.call(this, item);
      this.exports.view = Shadow.createView(item);
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
    exports.rootView = Shadow.rootView;
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
