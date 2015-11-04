import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(params) {
    const hash = {};
    return this.getUserByName(params.name).then((user) => {
      hash.user = user;
      return this.getRatingByRateeId(user.id).then((rating) => {
        hash.rating = rating;
        return hash;
      });
    });
  },

  getUserByName(name) {
    return this.store.filter('user', function(user) {
      return user.get('name') === name;
    }).then((users) => { return users.get('firstObject'); });
  },

  getRatingByRateeId(id) {
    return this.store.filter('rating', function(rating) {
      return rating.get('ratee_id') === parseInt(id);
    }).then((ratings) => { return ratings.get('firstObject'); });
  }
});
