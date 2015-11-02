import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  beenz: DS.attr('number', { defaultValue: 3 }),
  gravatar_url: DS.attr('string'),
});
