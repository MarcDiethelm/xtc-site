module.exports = function(app) {

	var docTitle = require(app.xtcPath('lib/helpers.js')).docTitle;

	return {

		/**
		 * User-defined route controllers
		 */

		 // render home.hbs and include it in the default layout (defined in config.js)
		home: function(req, res, next) {
			res.render('home');
		}

		,structure: function(req, res, next) {
			res.render('structure', {
				docTitle: docTitle('xtc default project structure')
			});
		}
	}
};
