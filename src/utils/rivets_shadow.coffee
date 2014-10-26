rivets.binders.child = ( el, child ) ->
  el.innerHTML = ''
  return unless child?

  el.appendChild(child) if child.nodeName?


rivets.binders.children = ( el, children ) ->
  el.innerHTML = ''
  return unless children?

  for child in children
    el.appendChild(child) if child?.nodeName?
