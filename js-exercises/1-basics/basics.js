/**
 * ⚠️☝️ INSTRUCTIONS ☝️⚠️
 *
 * - Do not remove any code
 * - Only add or edit code in areas marked with ✏️
 */

describe("basics", function() {
    "use strict";

    describe("Example test", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(someVariable).to.equal(true);
        });
    });

    describe("Some variable declarations are hoisted", function() {
        it("should run without errors", function() {
            expect(someVariable).to.equal(undefined);

            ////////////////////////////////////////////////////////////////////
            // Declare "someVariable" in way so that the declaration is hoisted.
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////
        });
    });

    describe("Other variables declarations are NOT hoisted", function() {
        it("should run without errors", function() {
            expect(() => {
                someVariable; // someVariable should NOT yet be defined here
            }).to.throw("Cannot access 'someVariable' before initialization");

            ////////////////////////////////////////////////////////////////////
            // Declare "someVariable" in way so that the declaration is NOT hoisted.
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(someVariable).to.equal(undefined);
        });
    });

    describe("Undefined or null?", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(typeof someVariable).to.equal("undefined");
            // Notice the difference:
            // == does a loose equality check
            // === does a strict equality check
            expect(someVariable == null).to.equal(true);
            expect(someVariable === null).to.equal(false);
        });
    });

    describe("Avoid primitive wrappers", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // 🚨 PLEASE NOTE 🚨:
            // new Number() creates a "primitive wrapper". It's not an actual number, it's an object.
            // In 99.999% of all cases, this is a bug and not actually intended. Fix it! :)
            // ✏️ FIX THAT BUG ✏️
            const someNumber = new Number(3);
            ////////////////////////////////////////////////////////////////////

            // The primitive wrapper passes the loose quality check because it will be casted to a number.
            expect(someNumber == 3).to.equal(true);
            // But it doesn't pass the strict equality check because an object is not a number.
            // This is why you should always do triple equality checks.
            expect(someNumber === 3).to.equal(true);
        });
    });

    describe("Writing big numbers without typing a lot zeros", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // We're searching for a big number written in way that we don't have to
            // write all the zeros.
            // Write it as a string so that the .length property can be checked.
            // ✏️ EDIT NEXT LINE ✏️
            const bigNumber = "...";
            ////////////////////////////////////////////////////////////////////

            expect(typeof bigNumber).to.equal("string");
            expect(bigNumber.length).to.equal(3);
            // Number(bigNumber) casts bigNumber from a string to a number
            expect(Number(bigNumber)).to.equal(1000000000);
        });
    });

    describe("Trailing zeros can be omitted", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // We're searching for a floating point number
            // written in way that we don't have to write all the zeros AFTER the point.
            // Write it as a string so that the .length property can be checked.
            // ✏️ EDIT NEXT LINE ✏️
            const someNumber = "...";
            ////////////////////////////////////////////////////////////////////

            expect(typeof someNumber).to.equal("string");
            expect(someNumber.length).to.equal(3);
            // Number(someNumber) casts someNumber from a string to a number
            expect(Number(someNumber)).to.equal(10);
        });
    });

    describe("Leading zeros can also be omitted", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // We're searching for a floating point number
            // written in way that we don't have to write all the zeros BEFORE the point.
            // Write it as a string so that the .length property can be checked.
            // ✏️ EDIT NEXT LINE ✏️
            const someNumber = "...";
            ////////////////////////////////////////////////////////////////////

            expect(typeof someNumber).to.equal("string");
            expect(someNumber.length).to.equal(2);
            expect(parseFloat(someNumber)).to.equal(0.2);
        });
    });

    describe("Create an object with a property", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(object instanceof Object).to.equal(true);
            expect(object.someProperty).to.equal(1);
        });
    });

    describe("Set a property to undefined", function() {
        it("should run without errors", function() {
            const object = {
                someProperty: 1
            };

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            // object.someProperty is undefined...
            expect(object.someProperty).to.equal(undefined);
            // ...but it's still a property:
            expect(object.hasOwnProperty("someProperty")).to.equal(true);
            expect("someProperty" in object).to.equal(true);
        });
    });

    describe("Delete a property from an object", function() {
        it("should run without errors", function() {
            const object = {
                someProperty: 1
            };

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            // object.someProperty is undefined...
            expect(object.someProperty).to.equal(undefined);
            // ...and it's actually not a property anymore:
            expect(object.hasOwnProperty("someProperty")).to.equal(false);
            expect("someProperty" in object).to.equal(false);
        });
    });

    describe("Create a new reference to the same array", function() {
        it("should run without errors", function() {
            const firstArray = [1, 2, 3];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(secondArray).to.eql([1, 2, 3]);

            // We add a 4 at the end of firstArray
            firstArray.push(4);

            expect(firstArray).to.eql([1, 2, 3, 4]);
            // Look at that: secondArray also has the 4. This means
            // that secondArray and firstArray must be the same array.
            expect(secondArray).to.eql([1, 2, 3, 4]);
        });
    });

    describe("Create an actual copy of an array", function() {
        it("should run without errors", function() {
            const firstArray = [1, 2, 3];

            ////////////////////////////////////////////////////////////////////
            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(firstArray).to.eql([1, 2, 3]);
            expect(secondArray).to.eql([1, 2, 3]);

            // We add a 4 at the end of firstArray
            firstArray.push(4);

            expect(firstArray).to.eql([1, 2, 3, 4]);
            // And now secondArray doesn't have the 4.
            // This means that secondArray is a real copy of firstArray.
            expect(secondArray).to.eql([1, 2, 3]);
        });
    });

    describe("Create an array with an initial length", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(longArray).to.be.instanceOf(Array);
            // Apparently longArray is really, really long. But don't worry: you don't have to write that by hand.
            // There is a way to create an array with an initial length.
            expect(longArray.length).to.equal(100);
        });
    });

    describe("Weird casting rules", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // We need two variables with two different types.
            // By observing their casting behavior in the tests below, you can find
            // out the required types.
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(typeof firstVariable).to.equal("number");
            expect(typeof secondVariable).to.equal("string");
            expect(firstVariable + secondVariable).to.equal("31");
            expect(firstVariable - secondVariable).to.equal(2);
            expect(secondVariable + firstVariable).to.equal("13");
            expect(secondVariable - firstVariable).to.equal(-2);
        });
    });

    describe("A falsy string", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // Can you find a string that casts to `false` in an if() statement?
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(typeof falsyString).to.equal("string");
            if (falsyString) {
                throw new Error(
                    "if() has been executed: falsyString is not falsy."
                );
            }
        });
    });

    describe("Falsy numbers", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // Can you find two different numbers that each cast to `false` in an if() statement?
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(typeof falsyNumber1).to.equal("number");
            expect(typeof falsyNumber2).to.equal("number");
            expect(falsyNumber1 === falsyNumber2).to.equal(false);
            if (falsyNumber1) {
                throw new Error(
                    "if() has been executed: falsyNumber1 is not falsy."
                );
            }
            if (falsyNumber2) {
                throw new Error(
                    "if() has been executed: falsyNumber2 is not falsy."
                );
            }
        });
    });

    describe("A falsy object?", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // Can you find a value that is typeof "object" but also casts to `false`?
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(typeof falsyThing).to.equal("object");
            if (falsyThing) {
                throw new Error(
                    "if() has been executed: falsyThing is not falsy."
                );
            }
        });
    });

    describe("Accessing keys with the bracket notation", function() {
        it("should run without errors", function() {
            const object = {
                firstProperty: 1,
                secondProperty: 2
            };
            let propertyName = "firstProperty";

            // We're freezing the object here which means that you can't change it anymore.
            // This is just a safety measurement so that you can't take any shortcuts :)
            Object.freeze(object);

            // Dynamic property access: take the string from propertyName
            // and use it to look up a property in object.
            expect(object[propertyName]).to.equal(1);

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            // That's the same property access as above, but now we get back
            // a different property.
            expect(object[propertyName]).to.equal(2);
        });
    });

    describe("Circular reference", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // You can create objects that reference themselves.
            // But you need two steps to do it.
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            expect(object.object).to.equal(object);
        });
    });
});
