class ExpandableView extends AbstractView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-abstract-view
           .shadow-expandable-view":
        "div.expander": ""

    css:
      ".shadow-expandable-view":
        "&.expander, >.expander":
          "&:not([data-expanded='true'])":
            "height": "0"
            "overflow": "hidden"


  @Component().populate()

  constructor: ( ) ->
    super

    @expanded = false

    if @element.className.indexOf('expander') isnt -1
      @expander = @element
    else @expander = @element.getElementsByClassName('expander')[0]

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
