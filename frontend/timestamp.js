/**
 * Executed on development. It will generate new version
 * for every commit to track the latest on each project instalation.
 */

// Load the packages for saving the file.
var fs = require('fs');
var rev = require('git-rev');

// More information on which branch you are.
var revShort = 0;
var revBranch = 0;

// File to be written
var readmeFile = "timestampOutput.js";	

// Printed content to the file
var content = '';					

// UNIX time stamp
var timestamp = Math.floor(new Date() / 1000);

// Grab the package.json version number
var json = JSON.parse(fs.readFileSync('package.json', 'utf8'))	
var version = json.version;		

content = "// Auto generated file from generate_version.js executed using `npm run version` command\n";
content += "var projectTimestamp = 'Project version: " + version + "_" + timestamp + "-alpha';";

// Overwrite the actual file.
fs.writeFile(readmeFile, content, function(err) {
	if (err) {
		return console.error(err);
	}
});

// And the branch name
rev.branch(function (str) {
	console.log("Timestamp on branch: " + str);
});

// Get the git commit short 
rev.short(function (str) {
	console.log("SHA: " + str);
});
