(function(window) {
	var Greet = "Hello";
	var helloSpeaker = function (name) {
		console.log(Greet + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);