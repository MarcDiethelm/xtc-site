(function($) {
	/**
	 * Structure module implementation.
	 *
	 * @author marc
	 * @namespace Tc.Module
	 * @class Structure
	 * @extends Tc.Module
	 */
	Tc.Module.Structure = Tc.Module.extend({

		showAll: false

		/**
		 * Initializes the Structure module.
		 *
		 * @method init
		 * @constructor
		 * @param {jQuery|Zepto} $ctx the jquery context
		 * @param {Sandbox} sandbox the sandbox to get the resources from
		 * @param {String} modId the unique module id
		 */
		,init: function($ctx, sandbox, modId) {
			// call base constructor
			this._super($ctx, sandbox, modId);
			this.bindAll('clickToggleContent');
			this.toggleContent(this.showAll);
		}

		/**
		 * Hook function to do all of your module stuff.
		 *
		 * @method on
		 * @param {Function} callback function
		 * @return void
		 */
		,on: function(callback) {
			this.$$('.link-toggle-content').on('click', this.clickToggleContent);
			callback();
		}

		,clickToggleContent: function(ev) {
			this.showAll = !this.showAll;
			this.toggleContent(this.showAll);
		}

		,toggleContent: function(state) {
			this.$$('.more').toggleClass('hidden', state);
			this.$$('.less').toggleClass('hidden', !state);
		}
	});
})(Tc.$);
