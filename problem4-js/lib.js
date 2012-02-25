var isPalindrome = function(theNumber) {
	var theWord = '' + theNumber;
	for(var i = 0; i < theWord.length; i++)
	{
		var smallerPosition = i;
		var largerPosition = theWord.length - 1 - smallerPosition;
		
		if(largerPosition > 0)
		{
			var thisLetter = theWord[smallerPosition];
			var otherLetter = theWord[largerPosition];
			
			if(thisLetter != otherLetter)
				return false;	
		}
			
	}
	return true;
};
