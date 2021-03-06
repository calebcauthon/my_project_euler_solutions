describe('2-multiplier', function() { 
	it("get true with 2,4,6,800,1234", function() {
		expect(isMultipleOf2(2)).toBe(true);
		expect(isMultipleOf2(4)).toBe(true);
		expect(isMultipleOf2(6)).toBe(true);
		expect(isMultipleOf2(800)).toBe(true);
		expect(isMultipleOf2(1234)).toBe(true);		
	});
	it("get false with 1,7,13,901,1233", function() {
		expect(isMultipleOf2(1)).toBe(false);
		expect(isMultipleOf2(7)).toBe(false);
		expect(isMultipleOf2(13)).toBe(false);
		expect(isMultipleOf2(901)).toBe(false);
		expect(isMultipleOf2(1233)).toBe(false);
	});
});

describe('fibonacci-sequencer', function() {
	it('should return 1,2,3,5 for getFib(1,5)', function() {
		var result = getFibonacciNumbersBetweenAndIncluding(1,5);
		expect(result.length).toBe(4);
		expect(result[0]).toBe(1);
		expect(result[1]).toBe(2);
		expect(result[2]).toBe(3);
		expect(result[3]).toBe(5);
	});
	it('should return 8,13,21 for getFib(7,22)', function() {
		var result = getFibonacciNumbersBetweenAndIncluding(7,22);
		expect(result[0]).toBe(8);
		expect(result[1]).toBe(13);
		expect(result[2]).toBe(21);
		expect(result.length).toBe(3);
	});
});	


   
