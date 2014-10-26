Shadow =
  initialized : false

  show: ( item, container ) ->
    container ||= document.body
    view = new RootView(item, container)

  createView: ( item ) ->
    for key in Object.keys(Shadow.attachers).reverse()
      attacher = Shadow.attachers[key]
      return view if view = attacher(item)

  attachers:
    number: ( item ) ->
      return null unless typeof item is 'number'
      return new NumberView(item)
