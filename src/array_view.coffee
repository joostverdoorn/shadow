class ArrayView extends ExpandableView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-expandable-view
          .shadow-array-view":
            "table": [
              { "thead[rv-on-click='toggle']":
                  "tr":
                    "td[colspan='2']": "Array"
              }

              { "tbody[rv-if='expanded']": {
                  "tr[rv-each-entry='item']": [
                    { "td.key[rv-text='index']": "" }
                    { "td.value[rv-view='entry']": "" }
                  ]
                }
              }
            ]

    css:
      ".shadow-array-view":

        "box-shadow": "0 0 .5em rgba(0, 0, 0, .3)"
        "max-height": "100%"
        "overflow-x": "overlay"

        "text-align": "left"
        "color": "#d3d7cf"

        "> table":
          "min-width": "100%"
          "border-spacing": "0"
          "border-collapse": "collapse"

          "> * > tr":
            "> td":
              "margin": "0"
              "padding": ".5em"


          "> thead":
            "color": "#eeeeec"
            "background-color": "#3465a4"

          "> tbody":
            "> tr":

              "border-top": "1px solid #555753"
              "&:not(:first-child)":
                "border-bottom": "1px solid #555753"
              "&:nth-child(even)":
                "background": "rgba(0, 0, 0, .1)"

              "&:nth-child(odd)":
                "background": "rgba(255, 255, 255, .05)"

              "> td":
                "vertical-align": "top"

                "&.key":
                  "text-align": "right"
                  "color": "#729fcf"

                "&.value":
                  "color": "blue"
