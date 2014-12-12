(function() {
  var AbstractView, BooleanView, EnumableView, ExpandableView, FunctionView, NullView, NumberView, RootView, Shadow, StringView, UndefinedView, callbacks,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Shadow = {
    absurd: Absurd(),
    createRootView: function(item) {
      Shadow.rootView = new RootView(item);
      return document.body.appendChild(Shadow.rootView.element);
    },
    show: function(item) {
      if (Shadow.rootView != null) {
        return Shadow.rootView.exports.item = item;
      } else {
        return Shadow.createRootView(item);
      }
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
      object: function(item) {
        if (typeof item !== 'object') {
          return null;
        }
        return new EnumerableView(item);
      },
      "function": function(item) {
        if (typeof item !== 'function') {
          return null;
        }
        return new FunctionView(item);
      },
      array: function(item) {
        if (!(item instanceof Array)) {
          return null;
        }
        return new EnumerableView(item);
      },
      undefined: function(item) {
        if (typeof item !== 'undefined') {
          return null;
        }
        return new UndefinedView(item);
      },
      "null": function(item) {
        if (item !== null) {
          return null;
        }
        return new NullView(item);
      },
      boolean: function(item) {
        if (typeof item !== 'boolean') {
          return null;
        }
        return new BooleanView(item);
      },
      number: function(item) {
        if (typeof item !== 'number') {
          return null;
        }
        return new NumberView(item);
      },
      string: function(item) {
        if (typeof item !== 'string') {
          return null;
        }
        return new StringView(item);
      }
    },
    init: function() {
      return document.onkeyup = (function(_this) {
        return function(event) {
          if (event.which === 192) {
            _this.show([1, 2, 3, 4, 5]);
            return _this.rootView.toggle();
          }
        };
      })(this);
    }
  };

  Shadow.init.call(Shadow);

  AbstractView = (function() {
    AbstractView.setComponent = function(component) {
      this.component = Shadow.absurd.component(this.name, component)();
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

  NullView = (function(_super) {
    __extends(NullView, _super);

    function NullView() {
      return NullView.__super__.constructor.apply(this, arguments);
    }

    NullView.setComponent({
      html: {
        "div.shadow-null-view .shadow-undefined-view": "null"
      },
      css: {
        ".shadow-null-view": {
          "color": "#fcaf3e"
        }
      }
    });

    return NullView;

  })(AbstractView);

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

  EnumableView = (function(_super) {
    __extends(EnumableView, _super);

    function EnumableView() {
      return EnumableView.__super__.constructor.apply(this, arguments);
    }

    EnumableView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view .shadow-enumerable-view": {
          "table": [
            {
              "thead[rv-on-click='toggle']": {
                "tr": {
                  "td[colspan='2']": "{ item.constructor.name }"
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

    return EnumableView;

  })(ExpandableView);

  FunctionView = (function(_super) {
    __extends(FunctionView, _super);

    FunctionView.expandee = {
      "div.shadow-expandee[rv-if='expanded']": "{ item }"
    };

    FunctionView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-expandable-view .shadow-function-view": ["function", FunctionView.toggle, FunctionView.expandee]
      },
      css: {
        ".shadow-function-view": {
          "text-align": "left",
          ".shadow-function-row > td.key": {
            "color": "red"
          },
          ".shadow-function-row > td.value": {
            "color": "blue"
          }
        }
      }
    });

    function FunctionView(item) {
      item = item.toString();
      FunctionView.__super__.constructor.call(this, item);
    }

    return FunctionView;

  })(ExpandableView);

  BooleanView = (function(_super) {
    __extends(BooleanView, _super);

    function BooleanView() {
      return BooleanView.__super__.constructor.apply(this, arguments);
    }

    BooleanView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-boolean-view": "{ item }"
      },
      css: {
        ".shadow-boolean-view": {
          "color": "#ef2929"
        }
      }
    });

    return BooleanView;

  })(AbstractView);

  NumberView = (function(_super) {
    __extends(NumberView, _super);

    function NumberView() {
      return NumberView.__super__.constructor.apply(this, arguments);
    }

    NumberView.setComponent({
      html: {
        "div.shadow-abstract-view .shadow-number-view": "{ item }"
      },
      css: {
        ".shadow-number-view": {
          "color": "#ad7fa0"
        }
      }
    });

    return NumberView;

  })(AbstractView);

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

  callbacks = new Map();

  rivets.adapters['.'] = {
    observe: function(obj, keypath, callback) {
      var fn;
      fn = function(events) {
        var event, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = events.length; _i < _len; _i++) {
          event = events[_i];
          if (event.name === keypath) {
            _results.push(callback());
          }
        }
        return _results;
      };
      if (!callbacks.has(obj)) {
        callbacks.set(obj, {});
      }
      if (!callbacks.get(obj)[keypath]) {
        callbacks.get(obj)[keypath] = new WeakMap();
      }
      callbacks.get(obj)[keypath].set(callback, fn);
      return Object.observe(obj, fn);
    },
    unobserve: function(obj, keypath, callback) {
      var fn, _ref, _ref1;
      if (fn = (_ref = callbacks.get(obj)) != null ? (_ref1 = _ref[keypath]) != null ? _ref1.get(callback) : void 0 : void 0) {
        return Object.unobserve(obj, fn);
      }
    },
    get: function(obj, keypath) {
      return obj[keypath];
    },
    set: function(obj, keypath, value) {
      return obj[keypath] = value;
    }
  };

  rivets.binders['each-*'] = {
    bind: function(el) {
      var attr, view, _i, _len, _ref;
      console.log('bind');
      if (this.marker == null) {
        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
        this.marker = document.createComment(" rivets: " + this.type + " ");
        this.iterated = [];
        el.removeAttribute(attr);
        el.parentNode.insertBefore(this.marker, el);
        el.parentNode.removeChild(el);
      } else {
        _ref = this.iterated;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          view = _ref[_i];
          view.bind();
        }
      }
    },
    unbind: function(el) {
      var key, keys, _i, _len, _results;
      console.log('unbind');
      keys = Object.keys(this.views);
      _results = [];
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        _results.push(this.binder["delete"].call(this, key));
      }
      return _results;
    },
    routine: function(el, collection) {
      var key, model, modelName, _ref;
      if (collection == null) {
        collection = [];
      }
      console.log('routine');
      modelName = this.args[0];
      this.el = el;
      this.collection = collection;
      if (this.views && this.views[key]) {
        this.binder["delete"].call(this, key);
      }
      this.views = {};
      _ref = this.collection;
      for (key in _ref) {
        model = _ref[key];
        this.binder.add.call(this, key, model);
      }
      return Object.observe(this.collection, (function(_this) {
        return function(events) {
          var event, _i, _len, _results;
          _results = [];
          for (_i = 0, _len = events.length; _i < _len; _i++) {
            event = events[_i];
            key = event.name;
            model = event.object[event.name];
            console.log(event, event.type);
            switch (event.type) {
              case 'add':
                _results.push(_this.binder.add.call(_this, key, model));
                break;
              case 'delete':
                _results.push(_this.binder["delete"].call(_this, key, model));
                break;
              case 'update':
                _this.binder["delete"].call(_this, key);
                _results.push(_this.binder.add.call(_this, key, model));
                break;
              default:
                _results.push(void 0);
            }
          }
          return _results;
        };
      })(this));
    },
    add: function(key, model) {
      var data, index, keys, modelName, options, previous, template, view;
      modelName = this.args[0];
      data = {
        index: key
      };
      data[modelName] = model;
      options = this.view.options();
      options.preloadData = true;
      template = this.el.cloneNode(true);
      view = new rivets._.View(template, data, options);
      this.views[key] = view;
      view.bind();
      keys = Object.keys(this.collection);
      index = keys.indexOf(key);
      previous = index ? keys[parseInt(index) - 1] : void 0;
      return this.marker.parentNode.insertBefore(template, previous != null ? previous.nextSibling : void 0);
    },
    "delete": function(key, model) {
      var view;
      view = this.views[key];
      view.unbind();
      view.els.forEach(function(el) {
        return el.remove();
      });
      return delete this.views[key];
    }
  };

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

  rivets.binders.view = {
    "function": true,
    routine: function(el, item) {
      var view;
      el.innerHTML = '';
      view = Shadow.createView(item);
      return el.appendChild(view.element);
    }
  };

  Shadow.factory = function(exports) {
    exports._ = Shadow;
    exports.AbstractView = AbstractView;
    exports.RootView = RootView;
    exports.ExpandableView = ExpandableView;
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
