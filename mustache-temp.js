 var mustache = require('mustache');

 result = mustache.render("Hello {{first_name}} {{last_name}}",
 	{
 		"first_name": 'omkar',
 		"last_name": 'nazarkar'
 	} 
 )

 console.log(result);