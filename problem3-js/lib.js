var getFactorsOf = function(theNumber) {
	var factors = [1];
	for(var i = 2; i <= theNumber; i++)
	{
			if((theNumber % i) == 0)
				factors.push(i);
	}
	return factors;
};

var getPrimeFactorsOf = function(theNumber, opts) {
	if(!opts)
		opts = {};
	var defaults = {
		returnOnlyLargest: false,
		startsAt: 2
	};
	var options = {
		returnOnlyLargest: opts.returnOnlyLargest || defaults.returnOnlyLargest,
		startsAt: opts.startsAt || defaults.startsAt
	};

	var factors = [];
	increment = 1;
	var smallestDivisor;
	for(var i = options.startsAt; i < theNumber; i = i + increment)
	{
		if(i == 3)
			increment = 2;

		var isAFactor = (theNumber % i) == 0 ? true : false;
		var isAPrimeNumber = isPrime(i);
		
		
		if(isAFactor && isAPrimeNumber)
		{
		
			var anotherFactor = theNumber / i;
			var anotherFactorIsPrime = isPrime(anotherFactor);

			var otherPrimeFactors = getPrimeFactorsOf(anotherFactor, { startsAt: i+1, returnOnlyLargest: options.returnOnlyLargest });

			if(options.returnOnlyLargest) {
				if(otherPrimeFactors > i) {
					i = otherPrimeFactors
				}
			}
			else {
				for(var j = 0; j < otherPrimeFactors.length; j++)
				{
					factors.push(otherPrimeFactors[j]);					
				}		
			}	

			if(options.returnOnlyLargest)
				factors = i;
			else {
				factors.push(i);

				if(anotherFactorIsPrime && anotherFactor != i)
					factors.push(anotherFactor);
			}

			if(options.returnOnlyLargest && anotherFactorIsPrime)
				return anotherFactor;

			i = theNumber;
		}

		if(i > theNumber / 2)
			return factors;
	}
	
	return factors;
};

var isPrime = function(theNumber) {
	if(theNumber == 2)
		return true;
	if(theNumber == 1)
		return false;
	for(var i = 2; i < theNumber; i++)
	{
		if((theNumber % i) == 0)
			return false;
	}
	return true;
};

var getLargestPrimeFactor = function(theNumber) {
	return getPrimeFactorsOf(theNumber, { returnOnlyLargest: true });
};
