Shadow =

  absurd: Absurd()

  createComponent: ( view ) ->
    name = view.name
    # console.log view.name

    html = css = {}

    # Modify the html object to have the necessary classes for scoping
    html = view.html

    # Scope the css as well
    css = view.css

    Component = Shadow.absurd.component name,
      html: html
      css: css
      constructor: (exports) ->
        if exports.container?
          @set('parent', exports.container)

        console.log @get('parent')
        @populate()
        rivets.bind(@el, exports)

    return Component


  show: ( item, container ) ->
    container ||= document.body
    view = new RootView(item, container)
    return view

  createView: ( item ) ->
    for key in Object.keys(Shadow.attachers).reverse()
      attacher = Shadow.attachers[key]
      return view if view = attacher(item)

  attachers:
    number: ( item ) ->
      return null unless typeof item is 'number'
      return new NumberView(item)
