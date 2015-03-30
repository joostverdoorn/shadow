factories = require('./factories')

module.exports = ( item ) ->
  for factory in factories
    return view if view = factory(item)
