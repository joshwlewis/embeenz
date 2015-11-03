import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  beenz: DS.attr('number'),
  gravatar_url: DS.attr('string')
});
