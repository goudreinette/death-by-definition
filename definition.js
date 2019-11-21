window.wd = require('word-definition')


wd.getDef("keyboard", "en", null, ({word, category, definition}) => {
	console.log(definition);
});