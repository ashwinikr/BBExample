
"use strict";
APP.NoteModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    name: "",
    address: "",
    phone: ""
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.name) errors.name = "Hey! Give this thing a name.";
    if (!attrs.address) errors.address = "You gotta write a address, duh!";
    if (!attrs.phone) errors.phone = "Put your phone in dumb dumb...";

    if (!_.isEmpty(errors)) {
      return errors;
    }
  }
});

APP.NoteCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: APP.NoteModel
});
