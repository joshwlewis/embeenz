import Ember from 'ember';

export default Ember.ObjectController.extend({
  session: Ember.inject.service('session'),

  actions: {
    signup() {
      const flash = this.get('flashMessages');
      const params = this.getProperties('name', 'email', 'password', 'password_confirmation');
      return this.get('session')
        .authenticate('authenticator:creds','profile', params)
        .then(() => {
          flash.success('Signed Up!');
        }, (reason) => {
          flash.danger(`Error: ${JSON.stringify(reason.responseJSON.errors)}`);
        });
    }
  }
});
