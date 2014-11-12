callbacks = new Map()

rivets.adapters['.'] =
  # Yes, a bit hacky, but this will do for now.
  observe: (obj, keypath, callback) ->

    fn = ( events ) ->
      callback() for event in events when event.name is keypath

    unless callbacks.has(obj)
      callbacks.set(obj, {})

    unless callbacks.get(obj)[keypath]
      callbacks.get(obj)[keypath] = new WeakMap()

    callbacks.get(obj)[keypath].set(callback, fn)
    Object.observe(obj, fn)


  unobserve: (obj, keypath, callback) ->
    if fn = callbacks.get(obj)?[keypath]?.get(callback)
      Object.unobserve(obj, fn)

  get: (obj, keypath) ->
    return obj[keypath]

  set: (obj, keypath, value) ->
    obj[keypath] = value



rivets.binders['each-*'] =
  bind: (el) ->
    console.log 'bind'

    unless @marker?
      attr = [@view.prefix, @type].join('-').replace '--', '-'
      @marker = document.createComment " rivets: #{@type} "
      @iterated = []

      el.removeAttribute attr
      el.parentNode.insertBefore @marker, el

      el.parentNode.removeChild el

    else
      for view in @iterated
        view.bind()
    return;

  unbind: (el) ->
    console.log 'unbind'

    keys = Object.keys(@views)
    for key in keys
      @binder.delete.call @, key

  routine: (el, collection = []) ->
    console.log 'routine'

    modelName = @args[0]
    @el = el
    @collection = collection

    if @views and @views[key]
      @binder.delete.call @, key

    @views = {}

    for key, model of @collection
      @binder.add.call @, key, model

    Object.observe @collection, ( events ) =>
      for event in events
        key = event.name
        model = event.object[event.name]

        console.log event, event.type
        switch event.type
          when 'add'
            @binder.add.call @, key, model
          when 'delete'
            @binder.delete.call @, key, model
          when 'update'
            @binder.delete.call @, key
            @binder.add.call @, key, model

  add: ( key, model ) ->
    modelName = @args[0]
    data =
      index: key

    data[modelName] = model

    options = @view.options()
    options.preloadData = true

    template = @el.cloneNode true

    view = new rivets._.View(template, data, options)
    @views[key] = view
    view.bind()


    keys = Object.keys(@collection)
    index = keys.indexOf(key)
    previous = if index then keys[parseInt(index) - 1] else undefined


    @marker.parentNode.insertBefore template, previous?.nextSibling

  delete: ( key, model ) ->
    view = @views[key]
    view.unbind()
    view.els.forEach ( el ) -> el.remove()

    delete @views[key]

rivets.binders.child = ( el, child ) ->
  el.innerHTML = ''
  return unless child?

  el.appendChild(child) if child.nodeName?


rivets.binders.children = ( el, children ) ->
  el.innerHTML = ''
  return unless children?

  for child in children
    el.appendChild(child) if child?.nodeName?

rivets.binders.view =
  function: true

  routine: ( el, item ) ->
    el.innerHTML = ''
    view = Shadow.createView(item)
    el.appendChild(view.element)
