/**
 * ⚠️☝️ INSTRUCTIONS ☝️⚠️
 *
 * - Do not remove any code
 * - Only add or edit code in areas marked with ✏️
 */

describe("numbers", function() {
    "use strict";

    describe("Is finite number", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////////

            expect(isFiniteNumber(0)).to.equal(true);
            expect(isFiniteNumber(1)).to.equal(true);
            expect(isFiniteNumber(0xff)).to.equal(true);
            expect(isFiniteNumber("0")).to.equal(false);
            expect(isFiniteNumber("1")).to.equal(false);
            expect(isFiniteNumber("NaN")).to.equal(false);
            expect(isFiniteNumber("")).to.equal(false);
            expect(isFiniteNumber(null)).to.equal(false);
            expect(isFiniteNumber(NaN)).to.equal(false);
            expect(isFiniteNumber(Infinity)).to.equal(false);
        });
    });

    describe("Is not a number", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️
            // You will also need to do an additional check here.

            ////////////////////////////////////////////////////////////////////////

            expect(isNotANumber(0)).to.equal(false);
            expect(isNotANumber(1)).to.equal(false);
            expect(isNotANumber(0xff)).to.equal(false);
            expect(isNotANumber("0")).to.equal(true);
            expect(isNotANumber("1")).to.equal(true);
            expect(isNotANumber("NaN")).to.equal(true);
            expect(isNotANumber("")).to.equal(true);
            expect(isNotANumber(null)).to.equal(true);
            expect(isNotANumber(NaN)).to.equal(true);
            expect(isNotANumber(Infinity)).to.equal(false);
        });
    });

    describe("Round number (1/3)", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////////

            expect(roundNumber(0)).to.equal(0);
            expect(roundNumber(0.4)).to.equal(0);
            expect(roundNumber(0.5)).to.equal(1);
            expect(roundNumber(0.6)).to.equal(1);
        });
    });

    describe("Round number (2/3)", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////////

            expect(roundNumber(0)).to.equal(0);
            expect(roundNumber(0.4)).to.equal(0);
            expect(roundNumber(0.5)).to.equal(0);
            expect(roundNumber(0.6)).to.equal(0);
        });
    });

    describe("Round number (3/3)", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////////

            expect(roundNumber(0)).to.equal(0);
            expect(roundNumber(0.4)).to.equal(1);
            expect(roundNumber(0.5)).to.equal(1);
            expect(roundNumber(0.6)).to.equal(1);
        });
    });

    describe("Get smallest number", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////////

            expect(getSmallestNumber([-1])).to.equal(-1);
            expect(getSmallestNumber([-1, 0, 1])).to.equal(-1);
            expect(getSmallestNumber([1, 0, -1])).to.equal(-1);
            expect(getSmallestNumber([])).to.equal(Infinity);
        });
    });

    describe("Get biggest number", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////////

            expect(getBiggestNumber([1])).to.equal(1);
            expect(getBiggestNumber([1, 0, -1])).to.equal(1);
            expect(getBiggestNumber([-1, 0, 1])).to.equal(1);
            expect(getBiggestNumber([])).to.equal(-Infinity);
        });
    });

    describe("Get random number between 0 and 1", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////////

            const previousNumbers = [];

            for (let i = 0; i < 100; i++) {
                const randomNumber = getRandomNumberBetween0And1();

                expect(randomNumber >= 0).to.equal(true);
                expect(randomNumber < 1).to.equal(true);
                expect(previousNumbers).not.to.contain(randomNumber);
                previousNumbers.push(randomNumber);
            }
        });
    });

    describe("Get random number between 10 and 10.1", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️
            // You will also need to do some calculations here.

            ////////////////////////////////////////////////////////////////////////

            const previousNumbers = [];

            for (let i = 0; i < 100; i++) {
                const randomNumber = getRandomNumberBetween10And10Point1();

                expect(randomNumber >= 10).to.equal(true);
                expect(randomNumber < 10.1).to.equal(true);
                expect(previousNumbers).not.to.contain(randomNumber);
                previousNumbers.push(randomNumber);
            }
        });
    });

    describe("To integer", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////////

            expect(toInteger("0")).to.equal(0);
            expect(toInteger("1")).to.equal(1);
            expect(toInteger("0xff")).to.equal(255);
            expect(Number.isNaN(toInteger("Hello"))).to.equal(true);
            expect(toInteger("2 is my favorite number")).to.equal(2);
            expect(Number.isNaN(toInteger("here comes the number 1"))).to.equal(
                true
            );
        });
    });
});
