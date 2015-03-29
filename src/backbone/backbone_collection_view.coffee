EnumerableView = require('../enumerable_view')
factories = require('../factories')

class BackboneCollectionView extends EnumerableView

  constructor: ( item ) ->
    @exports ||= {}
    @exports.name ||= item.constructor.name + " Collection"
    super item.models

factories.push ( item ) ->
  return null unless Backbone? and item instanceof Backbone.Collection
  return new BackboneCollectionView(item)

module.exports = BackboneCollectionView
