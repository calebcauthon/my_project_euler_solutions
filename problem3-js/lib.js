var getFactorsOf = function(theNumber) {
	var factors = [1];
	for(var i = 2; i <= theNumber; i++)
	{
			if((theNumber % i) == 0)
				factors.push(i);
	}
	return factors;
};

var getPrimeFactorsOf = function(theNumber) {
	var factors = [];
	for(var i = 2; i <= theNumber; i++)
	{
		var isAFactor = (theNumber % i) == 0 ? true : false;
		var isAPrimeNumber = isPrime(i);
		if(isAFactor && isAPrimeNumber)
			factors.push(i);
	}
	return factors;
};

var isPrime = function(theNumber) {
	var factors = getFactorsOf(theNumber);
	if(factors.length == 2)
		return true;
	else
		return false;
};


