class RootView extends ExpandableView

  @setComponent
    html:
      "div.shadow-abstract-view
            .shadow-expandable-view
            .shadow-root-view
            .shadow-expandee":
        "div.child[rv-view='item']": ""

    css:
      ".shadow-root-view":
        "&.shadow-expandee, >.shadow-expandee":
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

