describe('5-multiplier', function() {
	it("get true with 5,10,15,500,125", function() {
		expect(isMultipleOf5(5)).toBe(true);
		expect(isMultipleOf5(10)).toBe(true);
		expect(isMultipleOf5(15)).toBe(true);
		expect(isMultipleOf5(500)).toBe(true);
		expect(isMultipleOf5(125)).toBe(true);
	});
	it("get false with 6,11,16,501,126", function() {
		expect(isMultipleOf5(6)).toBe(false);
		expect(isMultipleOf5(11)).toBe(false);
		expect(isMultipleOf5(501)).toBe(false);
		expect(isMultipleOf5(126)).toBe(false);
	});
});
describe('3-multiplier', function() { 
	it("get true with 3,6,9,900,1233", function() {
		expect(isMultipleOf3(3)).toBe(true);
		expect(isMultipleOf3(6)).toBe(true);
		expect(isMultipleOf3(9)).toBe(true);
		expect(isMultipleOf3(900)).toBe(true);
		expect(isMultipleOf3(1233)).toBe(true);		
	});
	it("get false with 4,7,10,901,1234", function() {
		expect(isMultipleOf3(4)).toBe(false);
		expect(isMultipleOf3(7)).toBe(false);
		expect(isMultipleOf3(10)).toBe(false);
		expect(isMultipleOf3(901)).toBe(false);
		expect(isMultipleOf3(1234)).toBe(false);
	});
});

describe('naturalNumbers', function() {
	it("returns an array", function() {
		expect(typeof(getNaturalNumbersBetweenAndIncluding(1,5))).toBe(typeof([]));
	});			
	it("returns the right numbers", function() {
		var result = getNaturalNumbersBetweenAndIncluding(0,3);
		expect(result[0]).toBe(0);
		expect(result[1]).toBe(1);
		expect(result[2]).toBe(2);
		expect(result[3]).toBe(3);
		expect(result.length).toBe(4);
	});					
	it("returns more of the right numbers", function() {
		var result = getNaturalNumbersBetweenAndIncluding(100,103);
		expect(result[0]).toBe(100);
		expect(result[1]).toBe(101);
		expect(result[2]).toBe(102);
		expect(result[3]).toBe(103);
		expect(result.length).toBe(4);
	});
	it("should only include integers", function() {
		var result = getNaturalNumbersBetweenAndIncluding(.5, 2.5);
		expect(result[0]).toBe(1);
		expect(result[1]).toBe(2);
		expect(result.length).toBe(2);
	});
});
