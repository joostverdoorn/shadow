Shadow =

  absurd: Absurd()

  createRootView: ( item ) ->
    Shadow.rootView = new RootView(item)
    document.body.appendChild(Shadow.rootView.element)

  show: ( item ) ->
    if Shadow.rootView?
      view = Shadow.createView(item)
      Shadow.rootView.exports.view = view
    else
      Shadow.createRootView(item)
      view = Shadow.rootView.exports.view

    Shadow.rootView.expand()
    return view

  createView: ( item ) ->
    for key in Object.keys(Shadow.attachers).reverse()
      attacher = Shadow.attachers[key]
      return view if view = attacher(item)

  attachers:
    object: ( item ) ->
      return null unless typeof item is 'object'
      return new ObjectView(item)
    array: ( item ) ->
      return null unless item instanceof Array
      return new ArrayView(item)
    null: ( item ) ->
      return null unless item is undefined
      return new UndefinedView(item)
    undefined: ( item ) ->
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
      console.log event
      if event.which is 192 # '`'
        @show([1,2,3,4,5])
        @rootView.toggle()


Shadow.init.call(Shadow)
