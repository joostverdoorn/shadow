class NumberView extends AbstractView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-abstract-view
          .shadow-number-view": "Number: { number }"

    css:
      ".shadow-number-view":
        "border": "5px solid blue"

  @Component().populate()

  constructor: ( number ) ->
    super number
    @number = @exports.number = number
