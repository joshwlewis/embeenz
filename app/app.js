import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

const Adapter = DS.RESTAdapter.extend({
  host: 'https://beenz.herokuapp.com'
});

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  ApplicationAdapter: Adapter
});

loadInitializers(App, config.modulePrefix);

export default App;
