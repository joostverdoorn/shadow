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

    return view

  createView: ( item ) ->
    for key in Object.keys(Shadow.attachers).reverse()
      attacher = Shadow.attachers[key]
      return view if view = attacher(item)

  attachers:
    number: ( item ) ->
      return null unless typeof item is 'number'
      return new NumberView(item)

  init: ( ) ->
    document.onkeyup = ( event ) =>
      console.log event
      if event.which is 192 # '`'
        @show(3)
        @rootView.toggle()


Shadow.init.call(Shadow)
