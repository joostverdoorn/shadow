Shadow.factory = ( exports ) ->
    exports._ = Shadow

    exports.AbstractView   = AbstractView
    exports.RootView       = RootView
    exports.ExpandableView = ExpandableView

    # exports.NumberView     = NumberView

    exports.rootView       = Shadow.rootView
    exports.show           = Shadow.show
    exports.attachers      = Shadow.attachers

    exports.absurd         = Shadow.absurd


# Exports Shadow for CommonJS, AMD and the browser.
if typeof exports == 'object'
  Shadow.factory(exports)
else if typeof define == 'function' && define.amd
  define ['exports'], (exports) ->
    Shadow.factory(@Shadow = exports)
    return exports
else
  Shadow.factory(@Shadow = {})


