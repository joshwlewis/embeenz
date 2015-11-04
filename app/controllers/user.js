import Ember from 'ember';

export default Ember.ObjectController.extend({
  session: Ember.inject.service(),
  actions: {
    giveBeenz(beenz) {
      const ratee_id = this.get('model.user.id');
      const rating = this.get('model.rating') || this.store.createRecord('rating', {ratee_id});

      rating.set('beenz', beenz);
      rating.save().then(() => {
        this.set('model.rating', rating);
        this.flashMessages.success(`Gave ${beenz} beenz :)`);
      }, () => {
        this.flashMessages.warning("Error giving beenz :(");
      });
    }
  }
});
