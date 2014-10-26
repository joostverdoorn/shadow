class RootView extends ExpandableView

  @html:
    "div[rv-child='view']": "RootView: { component.el }"
  @css: @style @,
    "position":   "absolute"

    "top":        "0"
    "left":       "0"
    "width":      "100%"
    "height":     "100%"
    "background": "rgba(0, 0, 0, .6)"

    "> .child":
      "margin": "0 auto"


  @Component: Shadow.createComponent(@)

  constructor: ( item, container ) ->
    @view = Shadow.createView(item)
    exports =
      view: @view.component.el
      container: container
    super exports

