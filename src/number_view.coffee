class NumberView extends AbstractView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-abstract-view
          .shadow-number-view": "{ number }"

    css:
      ".shadow-number-view":
        "color": "blue"
        "font-weight": "bold"

  @Component().populate()

  constructor: ( number ) ->
    super number
    @number = @exports.number = number
