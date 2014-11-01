Shadow =

  absurd: Absurd()

  create: ( ) ->

  listen: ( ) ->
    @recognition = new webkitSpeechRecognition()
    @recognition.continuous = true
    @recognition.interimResults = false
    @recognition.lang = "nl-NL"

    @recognition.onresult = Shadow.processEvent

    @recognition.start()

  processEvent: ( ) ->
    index = event.resultIndex
    results = Sonic.create(event.results)
                      .pluck('0')
                      .pluck('transcript')


    result = results.at(index)
    console.log result

    switch
      when result.contains('start')
        Shadow.show(3)
        Shadow.rootView.expand()
      when result.contains('stop')
        Shadow.rootView.collapse()


    #   when result.contains('')

    # if result.contains('')

    # if create
    #   Shadow.show(3)
    #   Shadow.rootView.expand()
    # else if destroy
    #   Shadow.rootView.collapse()

    # event.results.length = 0


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
    # document.onkeyup = ( event ) =>
    #   console.log event
      # if event.which is 192 # '`'
      #   @show(3)
      #   @rootView.toggle()


Shadow.init.call(Shadow)
