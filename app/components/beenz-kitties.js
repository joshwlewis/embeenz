import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['kitties'],
  size: 16,
  isMulticolor: Ember.computed.reads('isEditable'),

  kitties: Ember.computed('beenz', 'isEditable', 'isMulticolor', function() {
    let kitties = [1,2,3,4,5].map((been) => {
      return {
        image: this.getImage(been),
        been:  been
      };
    });
    if (!this.get('isEditable')) {
      kitties = kitties.rejectBy('image', 0);
    }
    return kitties;
  }),

  getImage(been) {
    const beenz = this.get('beenz');
    if (beenz >= been) {
      if (this.get('isMulticolor')) {
        return been;
      } else {
        return beenz;
      }
    } else {
      return 0;
    }
  },

  actions: {
    giveBeenz(been) {
      console.log('firing level 2');
      this.sendAction('action', been);
    }
  }
});
