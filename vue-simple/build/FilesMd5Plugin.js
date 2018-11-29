'use strict';

const path = require('path');
const chalk = require('chalk');
const os = require('os');

class FriendlyErrorsWebpackPlugin {
	constructor(options) {
	    options = options || {};
	    this.compilationSuccessInfo = options.compilationSuccessInfo || {};
	    this.onErrors = options.onErrors;
	},

	apply(compiler) {
		compiler.plugin("compilation", function(compilation) {
			
		})
	}
}