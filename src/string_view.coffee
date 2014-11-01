class StringView extends AbstractView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-abstract-view
          .shadow-string-view": "\"{ string }\""

    css:
      ".shadow-string-view":
        "color": "yellow"
        # "border": "5px solid green"

  @Component().populate()

  constructor: ( string ) ->
    super
    @string = @exports.string = string
