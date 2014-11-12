class FunctionView extends ExpandableView

  @expandee:
    "div.shadow-expandee[rv-if='expanded']": "{ item }"
      # " { item | string } "

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-expandable-view
          .shadow-function-view": [
              "function",
              @toggle,
              @expandee,
            ]

    css:
      ".shadow-function-view":
        "text-align": "left"
        ".shadow-function-row > td.key":
          "color": "red"
        ".shadow-function-row > td.value":
          "color": "blue"

  constructor: ( item ) ->
    item = item.toString()
    super item
