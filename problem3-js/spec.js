describe("getLargestPrimeFactor", function() {
	it("should be able to do a modulus on a large number", function() {
		var mod = 600851475143 % 17;
	});
	it("should return 29 for 13195", function() {
		expect(getLargestPrimeFactor(13195)).toBe(29);
	});
});
describe("isPrime", function() {
	it("should return true for 2,3,5,97", function() {
		expect(isPrime(2)).toBe(true);
		expect(isPrime(3)).toBe(true);
		expect(isPrime(5)).toBe(true);
		expect(isPrime(97)).toBe(true);
	});
	it("should return false for 1,8,100,7522", function() {
		expect(isPrime(1)).toBe(false);
		expect(isPrime(8)).toBe(false);
		expect(isPrime(100)).toBe(false);
		expect(isPrime(7522)).toBe(false);
	});
});
describe("getPrimeFactorsOf", function() {
	it("should return [3] when 9 is input", function() {
		var result = getPrimeFactorsOf(9);
		expect(result.length).toBe(1);
		expect(result[0]).toBe(3);
	});
	it("should return [5] when 125 is input", function() {
		var result = getPrimeFactorsOf(125);
		expect(result.length).toBe(1);
		expect(result[0]).toBe(5);
	});
	it("should have a second parameter to say whether it will return all or just the largest", function() {
		var fullResult = getPrimeFactorsOf(13195);
		var onlyLargest = getPrimeFactorsOf(13195, {
			returnOnlyLargest: true
		});		
		console.log(fullResult);
		expect(fullResult[2]).toBe(7);
		expect(onlyLargest).toBe(29);
	});
});	
describe("getFactorsOf", function() {
	it("should return [1,3,9] when 9 is input", function() {
		var result = getFactorsOf(9);
		expect(result.length).toBe(3);
		expect(result[0]).toBe(1);
		expect(result[1]).toBe(3);
		expect(result[2]).toBe(9);
	});
	it("should return [1,5,25,125] when 125 is input", function() {
		var result = getFactorsOf(125);
		expect(result.length).toBe(4);
		expect(result[0]).toBe(1);
		expect(result[1]).toBe(5);
		expect(result[2]).toBe(25);
		expect(result[3]).toBe(125);
	});
});
