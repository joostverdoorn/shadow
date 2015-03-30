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
