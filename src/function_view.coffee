EnumerableView = require('./enumerable_view')

class FunctionView extends EnumerableView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-expandable-view
          .shadow-enumerable-view
          .shadow-function-view":
            "table": [
              { "thead[rv-on-click='toggle']":
                  "tr":
                    "td[colspan='2']": "function { name }"
              }

              { "tbody[rv-if='expanded']": {
                  "tr[rv-each-entry='item']": [
                    { "td.key[rv-text='index']": "" }
                    { "td.value[rv-view='entry']": "" }
                  ]
                }
              }
            ]

  # @expandee:
    # html:
    #   "div.shadow-abstract-view
    #       .shadow-expandable-view
    #       .shadow-function-view": [
    #           "function",
    #           @toggle,
    #           @expandee,
    #         ]

    # css:
    #   ".shadow-function-view":
    #     "text-align": "left"
    #     ".shadow-function-row > td.key":
    #       "color": "red"
    #     ".shadow-function-row > td.value":
    #       "color": "blue"

  constructor: ( item ) ->
    @exports ||= {}
    @exports.name ||= item.name
    super item

module.exports = FunctionView
