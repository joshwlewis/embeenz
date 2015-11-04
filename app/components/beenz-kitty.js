import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "img",
  classNames: ["kitty"],
  attributeBindings: ["src", "height", "width"],
  size: 18,
  src: Ember.computed("image", function() {
    return `/assets/images/kitty-${this.get('image')}.png`;
  }),
  height: Ember.computed.reads("size"),
  width: Ember.computed('height', function() {
    return Math.round(this.get("height") * 1.17);
  }),
  click() {
    console.log('firing level 1');
    this.sendAction('action', this.get('been'));
  }
});
