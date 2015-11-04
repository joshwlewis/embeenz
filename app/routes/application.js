import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model() {
    // If we are logged in load our ratings into the cache, but don't block
    if (this.get('session.isAuthenticated')) {
      this.store.findAll('rating');
    }
    return this.store.findAll('user');
  }
});
