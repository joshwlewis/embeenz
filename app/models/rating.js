import DS from 'ember-data';

export default DS.Model.extend({
  ratee_id: DS.attr('number'),
  beenz: DS.attr('number')
});
