import Ember from 'ember';

export default Ember.Object.extend({
  authorize(data, block) {
    const token = data['token'];
    if (!Ember.isEmpty(token)) {
      block('Authorization', `Bearer ${token}`);
    }
  }
});
