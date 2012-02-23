var getFibonacciNumbersBetweenAndIncluding = function(min, max) {
	var result = [];

	var lastNumber = 1
	var seedNumber = 1;
	var nextSeedNumber;

	while(seedNumber <= max) {
		if(seedNumber >= min)
			result.push(seedNumber);

		if(seedNumber == 1)
			nextSeedNumber = 2;
		else
			nextSeedNumber = seedNumber + lastNumber;				

		lastNumber = seedNumber;
		seedNumber = nextSeedNumber;
	}

	return result;
}

var isMultipleOf = function(theNumber, theDivisor) {
	return ((theNumber % theDivisor) == 0) ? true : false;
}
var isMultipleOf2 = function(theNumber) {
	return isMultipleOf(theNumber, 2);
};
