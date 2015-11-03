import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  classNames: ["kitties"],
  size: 16,

  kitties: Ember.computed('beenz', function() {
    return [1,2,3,4,5].map((been) => {
      return {
        image: this.getImage(been),
        been:  been
      };
    });
  }),

  getImage(been) {
    const beenz = this.get('beenz');
    if (beenz >= been) {
      if (this.get('multicolor')) {
        return been;
      } else {
        return beenz;
      }
    } else {
      return 0;
    }
  }
});
