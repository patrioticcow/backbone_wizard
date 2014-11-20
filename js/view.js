"use strict";

// Override View.remove()'s default behavior
Backbone.View = Backbone.View.extend({
	remove: function () {
		$(this.el).empty().detach();

		return this;
	}
});

var ContentView = Backbone.View.extend({
	// Initialize with the template-id
	initialize: function (options) {
		this.template = options.template;
	},

	events: {
		"click a": "submitForm"
	},

	// Get the template content and render it into a new div-element
	render: function () {
		var content = $(this.template).html();
		$(this.el).html(content);
		console.log($(this.el));
		return this;
	},

	submitForm: function (event) {
		alert("do something here");
	}
});