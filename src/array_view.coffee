class ArrayView extends ExpandableView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-abstract-view
          .shadow-expandable-view
          .shadow-array-view": [
            "[",
            { "dl[]":
                "dt[rv-each-entry='entries']": "{ entry.index } : { entry.value }" },
            "]" ]

    css:
      ".shadow-array-view":
        "> .entry:":
          "color": "red"

        # "border": "5px solid purple"


  @Component().populate()

  constructor: ( array ) ->
    super array
    # @array.map ( )
    @array = @exports.array = array

    @exports.entries = @array.map ( value, index ) -> { index, value }




  expand: ( ) ->

