class AbstractView

  @Component: Shadow.absurd.component @name,
    html:
     "div.shadow-abstract-view":"AbstractView"

    css:
      ".shadow-abstract-view":
        "font-family": "monospace"
        "display": "inline-block"
        "width": "200px"

  @Component().populate()

  constructor: ( item ) ->
    @exports = {}

    @component = @constructor.Component()
    @component.populate()

    rivets.bind(@component.el, @exports)

    @element = @component.el

