(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Shadow = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./absurd":2}],2:[function(require,module,exports){
(function() {
  module.exports = Absurd();

}).call(this);

//# sourceMappingURL=absurd.js.map

},{}],3:[function(require,module,exports){
(function() {
  var AbstractView, BooleanView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

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

  module.exports = BooleanView;

}).call(this);

//# sourceMappingURL=boolean_view.js.map

},{"./abstract_view":1}],4:[function(require,module,exports){
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

},{"./expandable_view":5}],5:[function(require,module,exports){
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

},{"./abstract_view":1}],6:[function(require,module,exports){
(function() {
  var factories;

  factories = {
    object: function(item) {
      var EnumerableView;
      if (typeof item !== 'object') {
        return null;
      }
      EnumerableView = require('./enumerable_view');
      return new EnumerableView(item);
    },
    "function": function(item) {
      var FunctionView;
      if (typeof item !== 'function') {
        return null;
      }
      FunctionView = require('./function_view');
      return new FunctionView(item);
    },
    array: function(item) {
      var EnumerableView;
      if (!(item instanceof Array)) {
        return null;
      }
      EnumerableView = require('./enumerable_view');
      return new EnumerableView(item);
    },
    undefined: function(item) {
      var UndefinedView;
      if (typeof item !== 'undefined') {
        return null;
      }
      UndefinedView = require('./undefined_view');
      return new UndefinedView(item);
    },
    "null": function(item) {
      var NullView;
      if (item !== null) {
        return null;
      }
      NullView = require('./null_view');
      return new NullView(item);
    },
    boolean: function(item) {
      var BooleanView;
      if (typeof item !== 'boolean') {
        return null;
      }
      BooleanView = require('./boolean_view');
      return new BooleanView(item);
    },
    number: function(item) {
      var NumberView;
      if (typeof item !== 'number') {
        return null;
      }
      NumberView = require('./number_view');
      return new NumberView(item);
    },
    string: function(item) {
      var StringView;
      if (typeof item !== 'string') {
        return null;
      }
      StringView = require('./string_view');
      return new StringView(item);
    }
  };

  module.exports = Object.keys(factories).reverse().map(function(key) {
    return factories[key];
  });

}).call(this);

//# sourceMappingURL=factories.js.map

},{"./boolean_view":3,"./enumerable_view":4,"./function_view":8,"./null_view":9,"./number_view":10,"./string_view":13,"./undefined_view":14}],7:[function(require,module,exports){
(function() {
  var factories;

  factories = require('./factories');

  module.exports = function(item) {
    var factory, view, _i, _len;
    for (_i = 0, _len = factories.length; _i < _len; _i++) {
      factory = factories[_i];
      if (view = factory(item)) {
        return view;
      }
    }
  };

}).call(this);

//# sourceMappingURL=factory.js.map

},{"./factories":6}],8:[function(require,module,exports){
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

},{"./enumerable_view":4}],9:[function(require,module,exports){
(function() {
  var AbstractView, NullView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

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

  module.exports = NullView;

}).call(this);

//# sourceMappingURL=null_view.js.map

},{"./abstract_view":1}],10:[function(require,module,exports){
(function() {
  var AbstractView, NumberView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

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

  module.exports = NumberView;

}).call(this);

//# sourceMappingURL=number_view.js.map

},{"./abstract_view":1}],11:[function(require,module,exports){
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

},{"./expandable_view":5}],12:[function(require,module,exports){
(function() {
  var Shadow, factory;

  factory = require('./factory');

  require('./utils/rivets_shadow');

  Shadow = function() {
    return factory.apply(null, arguments);
  };

  Shadow.createRootView = function(item) {
    Shadow.rootView = new Shadow.RootView(item);
    return document.body.appendChild(Shadow.rootView.element);
  };

  Shadow.show = function(item) {
    if (Shadow.rootView != null) {
      return Shadow.rootView.exports.item = item;
    } else {
      return Shadow.createRootView(item);
    }
  };

  Shadow.init = function() {
    return document.onkeyup = (function(_this) {
      return function(event) {
        if (event.which === 192) {
          _this.show(Shadow.AbstractView);
          return _this.rootView.toggle();
        }
      };
    })(this);
  };

  Shadow.factories = require('./factories');

  Shadow.AbstractView = require('./abstract_view');

  Shadow.NullView = require('./null_view');

  Shadow.UndefinedView = require('./undefined_view');

  Shadow.BooleanView = require('./boolean_view');

  Shadow.StringView = require('./string_view');

  Shadow.FunctionView = require('./function_view');

  Shadow.EnumerableView = require('./enumerable_view');

  Shadow.ExpandableView = require('./expandable_view');

  Shadow.RootView = require('./root_view');

  module.exports = Shadow;

}).call(this);

//# sourceMappingURL=shadow.js.map

},{"./abstract_view":1,"./boolean_view":3,"./enumerable_view":4,"./expandable_view":5,"./factories":6,"./factory":7,"./function_view":8,"./null_view":9,"./root_view":11,"./string_view":13,"./undefined_view":14,"./utils/rivets_shadow":15}],13:[function(require,module,exports){
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

},{"./abstract_view":1}],14:[function(require,module,exports){
(function() {
  var AbstractView, UndefinedView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AbstractView = require('./abstract_view');

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

  module.exports = UndefinedView;

}).call(this);

//# sourceMappingURL=undefined_view.js.map

},{"./abstract_view":1}],15:[function(require,module,exports){
(function() {
  var callbacks, factory;

  factory = require('../factory');

  callbacks = new Map();

  rivets.adapters['.'] = {
    observe: function(obj, keypath, callback) {
      var fn;
      console.log(obj, keypath, callback);
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
      if (!callbacks.get(obj)["rv_" + keypath]) {
        callbacks.get(obj)["rv_" + keypath] = new WeakMap();
      }
      callbacks.get(obj)["rv_" + keypath].set(callback, fn);
      return Object.observe(obj, fn);
    },
    unobserve: function(obj, keypath, callback) {
      var fn, _ref, _ref1;
      if (fn = (_ref = callbacks.get(obj)) != null ? (_ref1 = _ref["rv_" + keypath]) != null ? _ref1.get(callback) : void 0 : void 0) {
        return Object.unobserve(obj, fn);
      }
    },
    get: function(obj, keypath) {
      console.log(keypath, obj);
      return obj[keypath];
    },
    set: function(obj, keypath, value) {
      return obj[keypath] = value;
    }
  };

  rivets.binders['each-*'] = {
    "function": true,
    bind: function(el) {
      var attr, view, _i, _len, _ref;
      console.log('bind');
      this.exports = new Map();
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
      var key, modelName, _i, _len, _ref;
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
      _ref = Object.keys(this.collection);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        this.binder.add.call(this, key, this.collection[key]);
      }
      return Object.observe(this.collection, (function(_this) {
        return function(events) {
          var event, eventKey, eventModel, _j, _len1, _results;
          _results = [];
          for (_j = 0, _len1 = events.length; _j < _len1; _j++) {
            event = events[_j];
            eventKey = event.name;
            eventModel = event.object[event.name];
            switch (event.type) {
              case 'add':
                _results.push(_this.binder.add.call(_this, eventKey, eventModel));
                break;
              case 'delete':
                _results.push(_this.binder["delete"].call(_this, eventKey, eventModel));
                break;
              case 'update':
                _this.binder["delete"].call(_this, key);
                _results.push(_this.binder.add.call(_this, key, eventModel));
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
      this.exports.set(key, data);
      Object.observe(data, (function(_this) {
        return function(events) {
          var event, eventKey, eventModel, _i, _len, _results;
          _results = [];
          for (_i = 0, _len = events.length; _i < _len; _i++) {
            event = events[_i];
            eventKey = event.name;
            eventModel = event.object[event.name];
            console.log(eventKey, eventModel, event);
            _results.push(_this.collection[key] = eventModel);
          }
          return _results;
        };
      })(this));
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
      view = factory(item);
      return el.appendChild(view.element);
    }
  };

  rivets.binders["eval"] = {
    "function": true,
    bind: function(el) {
      return el.onchange = (function(_this) {
        return function(event) {
          return _this.model[_this.keypath] = eval(el.value);
        };
      })(this);
    },
    unbind: function(el) {
      return el.onchange = null;
    },
    routine: function(el, item) {
      return el.value = item;
    }
  };

}).call(this);

//# sourceMappingURL=rivets_shadow.js.map

},{"../factory":7}]},{},[12])(12)
});