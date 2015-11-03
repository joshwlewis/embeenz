import Ember from 'ember';
import Authenticator from 'ember-simple-auth/authenticators/base';

export default Authenticator.extend({
  restore(data) {
    if (data && data.token) {
      return Ember.RSVP.resolve(data);
    } else {
      return Ember.RSVP.reject();
    }
  },

  invalidate() {
    Ember.RSVP.resolve();
  },

  authenticate(path, params) {
    return Ember.$.ajax({
      url: `https://beenz.herokuapp.com/${path}`,
      type: 'POST',
      dataType: 'json',
      data: params
    }).then((result) => {
      return { token: result.token };
    });
  }
});
