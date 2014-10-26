class AbstractView

  @absurd: Absurd()

  @html:
    span: "AbstractView"

  @css:
    "font-family": "monospace"
    "display": "inline-view"

  @setComponent: ( name, component ) ->
    fullName = ...
    component.html[fullName] = component.html
    component.css[name] = component.css


  # Component: @absurd.component @name,
      # ".shadow-abstract-view"

    # constructor: ( exports ) ->
    #   @populate()
    #   rivets.bind(@el, exports)


  @style: ( css ) ->
    style = {}
    style[@constructor.name] = css
    @absurd.add(style)
    return style

  @html: ( html ) ->


  constructor: ( item ) ->
    @element = @_createElement()
    @exports = {}

    @component = @Component()

  _createElement: ( ) ->
    element = @Component(exports).el
    return element

