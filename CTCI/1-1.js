function allLettersUnique(string){
	var previous = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);
	for (var i = 0; i < string.length; i++) {

		if(previous.indexOf(string.charCodeAt(i)) > -1) {
			previous.push(string.charCodeAt(i));
			return false;
		}
		previous.push(string.charCodeAt(i));
	};
	return true;
}	
