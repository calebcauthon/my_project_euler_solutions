describe("isPalindrome", function() {
	it('should return true for 1001, 99, 10301, 1234321', function() {
		expect(isPalindrome(1001)).toBe(true);
		expect(isPalindrome(99)).toBe(true);
		expect(isPalindrome(10301)).toBe(true);
		expect(isPalindrome(1234321)).toBe(true);
	});
	it('should return false for 100, 23, 67, 1002', function() {
		expect(isPalindrome(100)).toBe(false);
		expect(isPalindrome(23)).toBe(false);
		expect(isPalindrome(67)).toBe(false);
		expect(isPalindrome(1002)).toBe(false);
	});
});
