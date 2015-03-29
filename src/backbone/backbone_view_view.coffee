EnumerableView = require('../enumerable_view')
factories = require('../factories')

class BackboneViewView extends EnumerableView

  constructor: ( item ) ->
    @exports ||= {}
    @exports.name ||= item.constructor.name + " View"
    super item

factories.push ( item ) ->
  return null unless Backbone? and item instanceof Backbone.View
  return new BackboneViewView(item)

module.exports = BackboneViewView
