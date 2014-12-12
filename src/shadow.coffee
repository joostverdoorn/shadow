Shadow =

  absurd: Absurd()

  createRootView: ( item ) ->
    Shadow.rootView = new RootView(item)
    document.body.appendChild(Shadow.rootView.element)

  show: ( item ) ->
    if Shadow.rootView?
      Shadow.rootView.exports.item = item
    else Shadow.createRootView(item)

  createView: ( item ) ->
    for key in Object.keys(Shadow.attachers).reverse()
      attacher = Shadow.attachers[key]
      return view if view = attacher(item)

  attachers:
    object: ( item ) ->
      return null unless typeof item is 'object'
      return new EnumerableView(item)
    function: ( item ) ->
      return null unless typeof item is 'function'
      return new FunctionView(item)
    array: ( item ) ->
      return null unless item instanceof Array
      return new EnumerableView(item)
    undefined: ( item ) ->
      return null unless typeof item is 'undefined'
      return new UndefinedView(item)
    null: ( item ) ->
      return null unless item is null
      return new NullView(item)
    boolean: ( item ) ->
      return null unless typeof item is 'boolean'
      return new BooleanView(item)
    number: ( item ) ->
      return null unless typeof item is 'number'
      return new NumberView(item)
    string: ( item ) ->
      return null unless typeof item is 'string'
      return new StringView(item)

  init: ( ) ->
    document.onkeyup = ( event ) =>
      if event.which is 192 # '`'
        @show(AbstractView)
        @rootView.toggle()


Shadow.init.call(Shadow)
