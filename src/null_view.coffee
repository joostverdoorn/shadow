class NullView extends AbstractView

  @setComponent
    html:
      "div.shadow-null-view
          .shadow-undefined-view": "null"

    css:
      ".shadow-null-view":
        "border": "5px solid orange"


