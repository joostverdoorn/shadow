EnumerableView = require('../enumerable_view')
factories = require('../factories')

class BackboneModelView extends EnumerableView

  constructor: ( item ) ->
    @exports ||= {}
    @exports.name ||= item.constructor.name + " Model"
    super item.attributes

factories.push ( item ) ->
  return null unless Backbone? and item instanceof Backbone.Model
  return new BackboneModelView(item)

module.exports = BackboneModelView
