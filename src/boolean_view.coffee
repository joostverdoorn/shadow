class BooleanView extends AbstractView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-boolean-view": "Boolean: { item }"

    css:
      ".shadow-boolean-view":
        "color": "green"
