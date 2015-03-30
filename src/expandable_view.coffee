AbstractView = require('./abstract_view')

class ExpandableView extends AbstractView


  @setComponent
    html:
      "div.shadow-abstract-view
       .shadow-expandable-view": [
        { "button.shadow-toggle[rv-on-click='toggle']": "+" }
        { "div.shadow-expandee[rv-when='expanded']": "" }
      ]

    css:
      ".shadow-expandable-view":
        "transition": "width 1s ease-in-out"

        ".shadow-toggle":
          "cursor": "pointer"

        "button.shadow-toggle":
          "background": "rgb(100, 100, 100)"
          "color": "rgb(240, 240, 240)"
          "font-size": "16px"
          "width": "1em"
          "height": "1em"
          "padding": "0"
          "line-height": "1em"
          "text-align": "center"
          "border": "1px solid rgb(70, 70, 70)"
          "border-radius": "4px"

  constructor: ( ) ->
    super

    @exports.expanded = false
    @exports.toggle = @toggle

  expand: ( ) ->
    @exports.expanded = true

  collapse: ( ) ->
    @exports.expanded = false


  toggle: ( ) =>
    if @exports.expanded
      @collapse()
    else @expand()

module.exports = ExpandableView
