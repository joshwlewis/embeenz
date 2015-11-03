import Ember from 'ember';

export default Ember.ObjectController.extend({
  session: Ember.inject.service('session'),

  actions: {
    login() {
      const flash = this.get('flashMessages');
      const params = this.getProperties('email', 'password');
      return this.get('session')
        .authenticate('authenticator:creds', 'session', params)
        .then(() => {
          flash.success('Logged In!');
        }, () => {
          flash.danger('Invalid Credentials');
        });
    }
  }
});
