class ExpandableView extends AbstractView

  @setComponent
    html:
      "div.shadow-abstract-view
           .shadow-expandable-view":
        "div.shadow-expander": ""

    css:
      ".shadow-expandable-view":
        "&.shadow-expander, .shadow-expander":
          "&:not([data-expanded='true'])":
            "height": "0"
            "overflow": "hidden"

  constructor: ( ) ->
    super

    @expanded = false

    if @element.className.indexOf('shadow-expander') isnt -1
      @expander = @element
    else @expander = @element.getElementsByClassName('shadow-expander')[0]

  expand: ( ) ->
    @expander.setAttribute('data-expanded', true)
    @expanded = true

  collapse: ( ) ->
    @expander.removeAttribute('data-expanded')
    @expanded = false

  toggle: ( ) ->
    if @expanded
      @collapse()
    else @expand()
