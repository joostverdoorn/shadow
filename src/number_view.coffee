class NumberView extends AbstractView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-number-view": "{ item }"

    css:
      ".shadow-number-view":
        "color": "blue"
        "font-weight": "bold"
