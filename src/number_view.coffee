AbstractView = require('./abstract_view')

class NumberView extends AbstractView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-number-view": "{ item }"

    css:
      ".shadow-number-view":
        "color": "#ad7fa0"
        # "font-weight": "bold"

module.exports = NumberView
