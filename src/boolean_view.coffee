AbstractView = require('./abstract_view')

class BooleanView extends AbstractView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-boolean-view": "{ item }"

    css:
      ".shadow-boolean-view":
        "color": "#ef2929"

module.exports = BooleanView
