class BooleanView extends AbstractView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-boolean-view": "Boolean: { boolean }"

    css:
      ".shadow-boolean-view":
        "color": "green"

  constructor: ( boolean ) ->
    super
    @boolean = @exports.boolean = boolean
