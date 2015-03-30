factory = require('./factory')
require('./utils/rivets_shadow')

Shadow = -> factory(arguments...)

Shadow.createRootView = ( item ) ->
    Shadow.rootView = new Shadow.RootView(item)
    document.body.appendChild(Shadow.rootView.element)

Shadow.show = ( item ) ->
    if Shadow.rootView?
      Shadow.rootView.exports.item = item
    else Shadow.createRootView(item)

Shadow.init = ( ) ->
    document.onkeyup = ( event ) =>
      if event.which is 192 # '`'
        @show(Shadow.AbstractView)
        @rootView.toggle()

Shadow.factories      = require('./factories')
Shadow.AbstractView   = require('./abstract_view')
Shadow.NullView       = require('./null_view')
Shadow.UndefinedView  = require('./undefined_view')
Shadow.BooleanView    = require('./boolean_view')
Shadow.StringView     = require('./string_view')
Shadow.FunctionView   = require('./function_view')
Shadow.EnumerableView = require('./enumerable_view')
Shadow.ExpandableView = require('./expandable_view')
Shadow.RootView       = require('./root_view')

module.exports = Shadow
