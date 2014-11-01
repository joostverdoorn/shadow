class NullView extends AbstractView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-null-view
          .shadow-undefined-view": "null"

    css:
      ".shadow-null-view":
        "border": "5px solid orange"

  @Component().populate()


