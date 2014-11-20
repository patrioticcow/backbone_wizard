var ApplicationRouter = Backbone.Router.extend({

	initialize: function (el) {
		this.el = el;

		this.firstView = new ContentView({template: '#first'});
		this.secondView = new ContentView({template: '#second'});
		this.thirdView = new ContentView({template: '#third'});
		this.forthView = new ContentView({template: '#forth'});
		this.notFoundView = new ContentView({template: '#not-found'});
	},

	routes: {
		"": "first",
		"first": "first",
		"second": "second",
		"third": "third",
		"forth": "forth",
		"*else": "notFound"
	},

	currentView: null,

	switchView: function (view) {
		// Detach the old view
		if (this.currentView) this.currentView.remove();

		// Move the view element into the DOM (replacing the old content)
		this.el.html(view.el);

		// Render view after it is in the DOM (styles are applied)
		view.render();

		this.currentView = view;
	},

	first: function () {
		this.switchView(this.firstView);
	},

	second: function () {
		this.switchView(this.secondView);
	},

	third: function () {
		this.switchView(this.thirdView);
	},

	forth: function () {
		this.switchView(this.forthView);
	},

	notFound: function () {
		this.switchView(this.notFoundView);
	}

});