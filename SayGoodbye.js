(function(window) {
	var Greet = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(Greet + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);