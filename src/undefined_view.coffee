class UndefinedView extends AbstractView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-abstract-view
          .shadow-undefined-view": "undefined"

    css:
      ".shadow-undefined-view":
        "color": "orange"
        # "border": "5px solid orange"

  @Component().populate()


