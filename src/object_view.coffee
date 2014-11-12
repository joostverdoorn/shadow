class ObjectView extends ExpandableView

  @expandee:
    "table.shadow-expandee[rv-if='expanded']":
      "tbody": {
        "tr.shadow-object-row[rv-each-entry='item']": [
          # { "td.key": "{ index }" },
          { "td.key[rv-view='index']": "" }
          { "td.value[rv-view='entry']": "" }
        ]

                }
  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-expandable-view
          .shadow-object-view": [
            @toggle,
            "{",
            @expandee
            "}"
          ]

    css:
      ".shadow-object-view":
        "text-align": "left"
        ".shadow-object-row > td.key":
          "color": "red"
        ".shadow-object-row > td.value":
          "color": "blue"

