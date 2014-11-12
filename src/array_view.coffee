class ArrayView extends ExpandableView


  @expandee: "table.shadow-expandee":
                "tbody": {
                  "tr.shadow-array-row[rv-each-entry='item']": [
                    # { "td.key": "{ index }" },
                    { "td.key[rv-view='index']": "" }
                    { "td.value[rv-view='entry']": "" }
                  ]
                }

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-expandable-view
          .shadow-array-view": [
            @toggle,
            "[",
            "div.shadow-expander": []
            "]"
          ]

    css:
      ".shadow-array-view":
        "text-align": "left"
        ".shadow-array-row > td.key":
          "color": "red"
        ".shadow-array-row > td.value":
          "color": "blue"

