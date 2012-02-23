var getNaturalNumbersBetweenAndIncluding = function(min, max) {
	var result = [];

	min = Math.floor(min - .1) + 1;
	max = Math.floor(max)
		
	for(var i = min; i <= max; i++) {
		result.push(i);
	}
		
	return result;
}
var isMultipleOf = function(theNumber, theDivisor) {
	return ((theNumber % theDivisor) == 0) ? true : false;
}
var isMultipleOf3 = function(theNumber) {
	return isMultipleOf(theNumber, 3);
};
var isMultipleOf5 = function(theNumber) {
	return isMultipleOf(theNumber, 5);
};
