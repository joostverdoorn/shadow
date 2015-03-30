AbstractView = require('./abstract_view')

class UndefinedView extends AbstractView

  @setComponent
    html:
      "div.shadow-abstract-view
          .shadow-undefined-view": "undefined"

    css:
      ".shadow-undefined-view":
        "color": "#fcaf3e"

module.exports = UndefinedView
