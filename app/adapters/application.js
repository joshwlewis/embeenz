import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host:       'https://beenz.herokuapp.com',
  authorizer: 'authorizer:bearer'
});
