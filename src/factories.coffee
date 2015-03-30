factories =
  object: ( item ) ->
    return null unless typeof item is 'object'
    EnumerableView = require('./enumerable_view')
    return new EnumerableView(item)
  function: ( item ) ->
    return null unless typeof item is 'function'
    FunctionView = require('./function_view')
    return new FunctionView(item)
  array: ( item ) ->
    return null unless item instanceof Array
    EnumerableView = require('./enumerable_view')
    return new EnumerableView(item)
  undefined: ( item ) ->
    return null unless typeof item is 'undefined'
    UndefinedView = require('./undefined_view')
    return new UndefinedView(item)
  null: ( item ) ->
    return null unless item is null
    NullView = require('./null_view')
    return new NullView(item)
  boolean: ( item ) ->
    return null unless typeof item is 'boolean'
    BooleanView = require('./boolean_view')
    return new BooleanView(item)
  number: ( item ) ->
    return null unless typeof item is 'number'
    NumberView = require('./number_view')
    return new NumberView(item)
  string: ( item ) ->
    return null unless typeof item is 'string'
    StringView = require('./string_view')
    return new StringView(item)

module.exports = Object.keys(factories).reverse().map((key) -> factories[key])




