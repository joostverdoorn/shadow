class BooleanView extends AbstractView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-abstract-view
          .shadow-boolean-view": "Boolean: { boolean }"

    css:
      ".shadow-boolean-view":
        "color": "green"
        # "border": "5px solid green"

  @Component().populate()

  constructor: ( boolean ) ->
    super
    @boolean = @exports.boolean = boolean
