import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      this.set('isEditing', true);
    },
    save() {
      this.set('isEditing', false);
      this.sendAction('action', this.get('beenz'));
    },
    giveBeenz(been) {
      this.set('beenz', been);
    }
  }
});
