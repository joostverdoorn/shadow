class AbstractView

  @setComponent: ( component ) ->
    @component = Shadow.absurd.component(@name, component)()
    @component.populate()


  @setComponent
    html:
      "div.shadow-abstract-view":"AbstractView"

    css:
      ".shadow-abstract-view":
        "font-family": "monospace"
        "display": "inline-block"
        "width": "200px"



  constructor: ( ) ->
    @exports = {}

    @element = @constructor.component.el.cloneNode(true)
    rivets.bind(@element, @exports)


