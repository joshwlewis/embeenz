import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model() {
    if (this.get('session.isAuthenticated')) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.get('session').authorize('authorizer:bearer', (headerName, headerValue) => {
          const headers =  {};
          headers[headerName] = headerValue;
          Ember.$.ajax('https://beenz.herokuapp.com/profile', {headers}).then((data) => {
            resolve(this.store.push('profile', data));
          }, () => {
            reject();
          });
        });
    });
  }
  }
});
