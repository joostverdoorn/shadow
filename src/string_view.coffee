class StringView extends AbstractView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-string-view": "\"{ string }\""

    css:
      ".shadow-string-view":
        "color": "yellow"

  constructor: ( string ) ->
    super
    @string = @exports.string = string
