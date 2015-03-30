AbstractView = require('./abstract_view')

class NullView extends AbstractView

  @setComponent
    html:
      "div.shadow-null-view
          .shadow-undefined-view": "null"

    css:
      ".shadow-null-view":
        "color": "#fcaf3e"

module.exports = NullView
