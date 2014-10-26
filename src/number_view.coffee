class NumberView extends AbstractView

  @html:
    'span[class="number"]': "NumberView: { number}"
  @css: @style @,
    "border": "5px solid red"

  @Component: Shadow.createComponent(@)

  constructor: ( number ) ->
    exports = number: number
    super exports
