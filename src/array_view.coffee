class ArrayView extends ExpandableView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-expandable-view
          .shadow-array-view": [
            "[",
              "table.shadow-expander":
                "tbody": {
                  "tr.shadow-array-row[rv-each-entry='array']": [
                    # { "td.key": "{ index }" },
                    { "td.key[rv-view='index']": "" }
                    { "td.value[rv-view='entry']": "" }
                  ]
                }
            "]"
          ]

    css:
      ".shadow-array-view":
        "text-align": "left"
        ".shadow-array-row > td.key":
          "color": "red"
        ".shadow-array-row > td.value":
          "color": "blue"

  constructor: ( array ) ->
    super()
    @exports.array = array
