class ObjectView extends AbstractView

  @Component: Shadow.absurd.component @name,
    html:
      "div.shadow-abstract-view
          .shadow-object-view": "Object: { object }"

    css:
      ".shadow-object-view":
        "border": "5px solid orange"

  @Component().populate()

