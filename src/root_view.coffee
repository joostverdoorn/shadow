class RootView extends ExpandableView

  Component: @absurd.component @name,
    html:
      ".shadow-abstract-view.shadow-root-view":
        "hello"

    css:
      ".shadow-root-view":
        "position":   "absolute"

        "top":        "0"
        "left":       "0"
        "width":      "100%"
        "height":     "100%"
        "background": "rgba(0, 0, 0, .6)"

        "> .child":
          "margin": "0 auto"




  constructor: ( item, container ) ->
    super item

    @exports.view = Shadow.createView(item)

    @container = container
    @container.appendChild(@element)


