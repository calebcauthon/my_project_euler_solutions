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
