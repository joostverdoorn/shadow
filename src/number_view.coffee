class NumberView extends AbstractView


  @style
    ".shadow-number-view":
      "border": "5px solid red"

  className: "shadow-number-view"

  html:
    '''
    <span class="number">Number: { number }</span>
    '''


  constructor: ( number ) ->
    super number
    @number = @exports.number = number
