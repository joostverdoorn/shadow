class AbstractView

  # This method will cache the styles from the top down
  @style: (view, css) ->
    # return @css if @css? # Return the cached version, if any

    if view is AbstractView # If we are at the top
      return css
    else
      console.log view.name
      base = view::constructor.css
      for k in Object.keys(css)
        base[k] = css[k]
      return base



  @html: () ->
    span: "AbstractView"

  @css: @style @,
    "font-family": "monospace"
    "display": "inline-view"


  @Component: Shadow.createComponent(@)

  constructor: ( exports = {} ) ->
    @exports = exports

    @component = @constructor.Component(@exports)
    # console.log @component.el
