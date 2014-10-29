class RootView extends ExpandableView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-abstract-view
            .shadow-expandable-view
            .shadow-root-view
            .expander":
        "div.child[rv-child='view.element']": ""

    css:
      ".shadow-root-view":
        "&.expander, >.expander":
          "&[data-expanded='true']":
            "color": "pink"

            "position":   "absolute"

            "top":        "0"
            "left":       "0"

            "width":      "100%"
            "height":     "100%"

            "background": "rgba(0, 0, 0, .6)"
            "text-align": "center"

        "&.child, >.child":
          "> *":
            "background-color": "green"

  @Component().populate()

  constructor: ( item ) ->
    super item
    @exports.view = Shadow.createView(item)
