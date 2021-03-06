absurd = require('./absurd')

class AbstractView

  @setComponent: ( component ) ->
    @component = absurd.component(@name, component)()
    @component.populate()


  @setComponent
    html:
      "div.shadow-abstract-view":"AbstractView"

    css:
      ".shadow-abstract-view":
        "font-family": "monospace"
        "display": "inline-block"
        "position": "relative"

        # "-wmso-animation": "fadeInLeft 2s"

      # "@keyframes fadein":
      #     "from":
      #       "opacity": "0"
      #     "to":
      #       "opacity": "1"



  constructor: ( item, exports = {} ) ->
    @exports ||= exports
    @exports['item'] = item

    @element = @constructor.component.el.cloneNode(true)
    rivets.bind(@element, @exports)


module.exports = AbstractView
