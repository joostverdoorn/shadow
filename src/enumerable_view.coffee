ExpandableView = require('./expandable_view')

class EnumerableView extends ExpandableView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-expandable-view
          .shadow-enumerable-view":
            "table": [
              { "thead[rv-on-click='toggle']":
                  "tr":
                    "td[colspan='2']": "{ name }"
              }

              { "tbody[rv-if='expanded']": {
                  "tr[rv-each-entry='item']": [
                    { "td.key[rv-text='index']": "" }
                    { "td.value[rv-view='entry']": "" } # [rv-on-dblclick='toggleEditable']
                    # { "td.editor": "input[rv-eval='entry']": "" }
                  ]
                }
              }
            ]

    css:
      ".shadow-enumerable-view":

        "box-shadow": "0 0 .8em rgba(0, 0, 0, .2)"
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
              "padding": ".3em .3em .3em  .5em"

          "> thead":
            "color": "#eeeeec"
            "background-color": "#3465a4"

          "> tbody":
            "> tr":
              # "> td.editor":
              #   "display": "block"

              # "&[data-editable='true']":
                # "> td:not(.editor)":
                #   "disply": "hidden"

              # "&:not([data-editable='true'])":
              #   "> td:not(.editor)":
              #     "display": "inherit"

              #   "> td.editor":
              #     "disply": "hidden"

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



  constructor: ( item ) ->
    @exports ||= {}
    @exports.name ||= item.constructor.name
    @exports.toggleEditable = @toggleEditable

    super item

  toggleEditable: ( event ) ->
    event.srcElement.parentElement.setAttribute('data-editable')

module.exports = EnumerableView
