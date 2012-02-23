var getFactorsOf = function(theNumber) {
	var factors = [1];
	for(var i = 2; i <= theNumber; i++)
	{
			if((theNumber % i) == 0)
				factors.push(i);
	}
	return factors;
}
