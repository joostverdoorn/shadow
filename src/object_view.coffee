class ObjectView extends ExpandableView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-expandable-view
          .shadow-object-view": [
            "{",
              "table.shadow-expander":
                "tbody": {
                  "tr.shadow-object-row[rv-each-entry='object']": [
                    # { "td.key": "{ index }" },
                    { "td.key[rv-view='index']": "" }
                    { "td.value[rv-view='entry']": "" }
                  ]
                }
            "}"
          ]

    css:
      ".shadow-object-view":
        "text-align": "left"
        ".shadow-object-row > td.key":
          "color": "red"
        ".shadow-object-row > td.value":
          "color": "blue"

  constructor: ( object ) ->
    super()
    @exports.object = object
