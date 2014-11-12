class NumberView extends AbstractView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-number-view": "{ number }"

    css:
      ".shadow-number-view":
        "color": "blue"
        "font-weight": "bold"

  constructor: ( number ) ->
    super number
    @number = @exports.number = number
