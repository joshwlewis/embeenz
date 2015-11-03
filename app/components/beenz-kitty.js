import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  classNames: ["kitty"],
  size: 18,
  height: Ember.computed.reads("size"),
  width: Ember.computed('height', function() {
    return Math.round(this.get("height") * 1.17);
  })
});
