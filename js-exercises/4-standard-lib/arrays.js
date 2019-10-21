/**
 * ⚠️☝️ INSTRUCTIONS ☝️⚠️
 *
 * - Do not remove any code
 * - Only add or edit code in areas marked with ✏️
 */

describe("arrays", function() {
    "use strict";

    describe("Number of items in an array", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(getNumberOfItems([])).to.equal(0);
            expect(getNumberOfItems(["a"])).to.equal(1);
            expect(getNumberOfItems(["a", "b"])).to.equal(2);
            expect(getNumberOfItems(["a", "b", "c"])).to.equal(3);
        });
    });

    describe("Remove last item", function() {
        it("should run without errors", function() {
            const array = ["a", "b", "c", "d"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(removeLastItem()).to.equal("d");
            expect(array).to.eql(["a", "b", "c"]);
            expect(removeLastItem()).to.equal("c");
            expect(array).to.eql(["a", "b"]);
        });
    });

    describe("Append item", function() {
        it("should run without errors", function() {
            const array = [];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(appendItem("a")).to.equal(1);
            expect(array).to.eql(["a"]);
            expect(appendItem("b")).to.equal(2);
            expect(array).to.eql(["a", "b"]);
        });
    });

    describe("Append multiple items", function() {
        it("should run without errors", function() {
            const array = [];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(appendMultipleItems("a", "b", "c")).to.equal(3);
            expect(array).to.eql(["a", "b", "c"]);
            expect(appendMultipleItems("d", "e")).to.equal(5);
            expect(array).to.eql(["a", "b", "c", "d", "e"]);
        });
    });

    describe("Remove first item", function() {
        it("should run without errors", function() {
            const array = ["a", "b", "c", "d"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(removeFirstItem()).to.equal("a");
            expect(array).to.eql(["b", "c", "d"]);
            expect(removeFirstItem()).to.equal("b");
            expect(array).to.eql(["c", "d"]);
        });
    });

    describe("Prepend multiple items", function() {
        it("should run without errors", function() {
            const array = ["x"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(prependMultipleItems("a", "b", "c")).to.equal(4);
            expect(array).to.eql(["a", "b", "c", "x"]);
            expect(prependMultipleItems("d", "e")).to.equal(6);
            expect(array).to.eql(["d", "e", "a", "b", "c", "x"]);
        });
    });

    describe("Add items at a certain position", function() {
        it("should run without errors", function() {
            const array = ["x", "y"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            addItemsAtFirstPosition("a");
            addItemsAtFirstPosition("b");
            expect(array).to.eql(["x", "b", "a", "y"]);
            addItemsAtFirstPosition("c", "d");
            expect(array).to.eql(["x", "c", "d", "b", "a", "y"]);
        });
    });

    describe("Overwrite items at a certain position", function() {
        it("should run without errors", function() {
            const array = ["x", "y"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            overwriteItemsAtFirstPosition("a");
            overwriteItemsAtFirstPosition("b");
            expect(array).to.eql(["x", "b"]);
            overwriteItemsAtFirstPosition("c", "d");
            expect(array).to.eql(["x", "c", "d"]);
        });
    });

    describe("Reverse the order of the array", function() {
        it("should run without errors", function() {
            const array = ["a", "b", "c"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            backwards();
            expect(array).to.eql(["c", "b", "a"]);
            backwards();
            expect(array).to.eql(["a", "b", "c"]);
        });
    });

    describe("Sort strings", function() {
        it("should run without errors", function() {
            const array = ["c", "a", "b"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(sortAlphabetically()).to.equal(array);
            expect(array).to.eql(["a", "b", "c"]);
        });
    });

    describe("Sort strings by length", function() {
        it("should run without errors", function() {
            const array = ["aaa", "c", "bb"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(sortByLength()).to.equal(array);
            expect(array).to.eql(["c", "bb", "aaa"]);
        });
    });

    describe("Create a copy of an array", function() {
        it("should run without errors", function() {
            const array1 = ["a", "b", "c"];
            const array2 = ["x", "y"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            const array1Copy = copy(array1);
            const array2Copy = copy(array2);

            expect(array1Copy).to.eql(array1);
            expect(array1Copy).not.to.equal(array1);
            expect(array2Copy).to.eql(array2);
            expect(array2Copy).not.to.equal(array2);
        });
    });

    describe("Sort an array without mutating it", function() {
        it("should run without errors", function() {
            const array = [3, 1, 2];

            ////////////////////////////////////////////////////////////////////
            // The .sort() method mutates *and* returns the array.
            // This is a common source of bugs because a lot of people
            // assume that .sort() creates a copy of an array.
            // You need to do that manually first.
            // 🐛🛠 FIX THE BUG 🛠🐛
            function sortWithoutMutation() {
                return array.sort();
            }
            ////////////////////////////////////////////////////////////////////

            // The function should return a new sorted array.
            expect(sortWithoutMutation()).to.eql([1, 2, 3]);
            // Check if the original array hasn't been mutated.
            expect(array).to.eql([3, 1, 2]);
        });
    });

    describe("Create a slice of an array", function() {
        it("should run without errors", function() {
            const array = ["a", "b", "c", "d", "e", "f"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(cut(1)).to.eql(["b", "c", "d", "e", "f"]);
            expect(cut(-2)).to.eql(["e", "f"]);
            expect(cut(2, -2)).to.eql(["c", "d"]);
            // Check if the original array hasn't been mutated.
            expect(array).to.eql(["a", "b", "c", "d", "e", "f"]);
        });
    });

    describe("Get the index of the first occurrence", function() {
        it("should run without errors", function() {
            const array = ["a", "b", "a", "b", "a"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(firstOccurrence("a")).to.equal(0);
            expect(firstOccurrence("b")).to.equal(1);
            expect(firstOccurrence("c")).to.equal(-1);
        });
    });

    describe("Get the index of the last occurrence", function() {
        it("should run without errors", function() {
            const array = ["a", "b", "a", "b", "a"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(lastOccurrence("a")).to.equal(4);
            expect(lastOccurrence("b")).to.equal(3);
            expect(lastOccurrence("c")).to.equal(-1);
        });
    });

    describe("Array contains item", function() {
        it("should run without errors", function() {
            const array = ["a", "b"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(contains("a")).to.equal(true);
            expect(contains("b")).to.equal(true);
            expect(contains("c")).to.equal(false);
        });
    });

    describe("Combine multiple arrays", function() {
        it("should run without errors", function() {
            const array = ["a"];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(combine("b")).to.eql(["a", "b"]);
            expect(combine(["b"])).to.eql(["a", "b"]);
            expect(combine(["b"], "c")).to.eql(["a", "b", "c"]);
            expect(combine(["b", "c"], ["d"], "e")).to.eql([
                "a",
                "b",
                "c",
                "d",
                "e"
            ]);
            // Check if the original array hasn't been mutated.
            expect(array).to.eql(["a"]);
        });
    });

    describe("Exclude numbers below a certain limit", function() {
        it("should run without errors", function() {
            const numbers = [1, 2, 3, 4, 5];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(excludeNumbersBelowLimit(1)).to.eql([1, 2, 3, 4, 5]);
            expect(excludeNumbersBelowLimit(2)).to.eql([2, 3, 4, 5]);
            expect(excludeNumbersBelowLimit(5)).to.eql([5]);
            expect(excludeNumbersBelowLimit(6)).to.eql([]);
            // Check if the original array hasn't been mutated.
            expect(numbers).to.eql([1, 2, 3, 4, 5]);
        });
    });

    describe("Are all numbers greater than a certain limit?", function() {
        it("should run without errors", function() {
            const numbers = [1, 2, 3, 4, 5];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(allGreaterThan(3)).to.equal(false);
            expect(allGreaterThan(1)).to.equal(false);
            expect(allGreaterThan(0)).to.equal(true);
            expect(allGreaterThan(-5)).to.equal(true);
            // Check if the original array hasn't been mutated.
            expect(numbers).to.eql([1, 2, 3, 4, 5]);
        });
    });

    describe("Is one number below a certain limit?", function() {
        it("should run without errors", function() {
            const numbers = [1, 2, 3, 4, 5];

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(oneNumberIsBelowLimit(5)).to.equal(true);
            expect(oneNumberIsBelowLimit(2)).to.equal(true);
            expect(oneNumberIsBelowLimit(1)).to.equal(false);
            expect(oneNumberIsBelowLimit(0)).to.equal(false);
            // Check if the original array hasn't been mutated.
            expect(numbers).to.eql([1, 2, 3, 4, 5]);
        });
    });

    describe("Pick user names", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(pickUserNames([])).to.eql([]);
            expect(pickUserNames([{ name: "Bob" }, { name: "Alice" }])).to.eql([
                "Bob",
                "Alice"
            ]);
        });
    });

    describe("Pick dynamic key", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(pick("something", [])).to.eql([]);
            expect(pick("name", [{ name: "Bob" }, { name: "Alice" }])).to.eql([
                "Bob",
                "Alice"
            ]);
            expect(
                pick("age", [
                    { name: "Bob", age: 20 },
                    { name: "Alice", age: 21 }
                ])
            ).to.eql([20, 21]);
        });
    });

    describe("Get user names below a certain age", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // You will need to chain multiple array methods here.
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(getUserNamesBelow18([])).to.eql([]);
            expect(
                getUserNamesBelow18([
                    { name: "Bob", age: 17 },
                    { name: "Alice", age: 21 }
                ])
            ).to.eql(["Bob"]);
        });
    });

    describe("Sum up numbers", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(sumUp([1])).to.equal(1);
            expect(sumUp([1, 2, 3])).to.equal(6);
            expect(sumUp([1, 2, -3])).to.equal(0);
        });
    });

    describe("Sum up numbers above a certain limit", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // You will need to chain multiple array methods here.
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(sumUpNumbersAboveLimit([1], 0)).to.equal(1);
            expect(sumUpNumbersAboveLimit([1], 1)).to.equal(0);
            expect(sumUpNumbersAboveLimit([1, 2, 3], 1)).to.equal(5);
            expect(sumUpNumbersAboveLimit([1, 2, -3], 1)).to.equal(2);
        });
    });

    describe("Create array with a specific length", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(createArray(0) instanceof Array).to.equal(true);
            expect(createArray(30).length).to.equal(30);
            expect(createArray(10000).length).to.equal(10000);
        });
    });

    describe("Create array with certain items", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // This function does not work as intended. Can you fix it?
            // 🐛🛠 FIX THE BUG 🛠🐛
            function createArray(...args) {
                return new Array(...args);
            }
            ////////////////////////////////////////////////////////////////////

            expect(createArray(30)).to.eql([30]);
            expect(createArray(30, 0)).to.eql([30, 0]);
        });
    });

    describe("Create an array from an array-like thing", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            const array1 = createArray({
                length: 2,
                [0]: "First item",
                [1]: "Second item"
            });
            const array2 = createArray({
                length: 1,
                [0]: "First item"
            });

            expect(array1 instanceof Array).to.equal(true);
            expect(array1).to.eql(["First item", "Second item"]);

            expect(array2 instanceof Array).to.equal(true);
            expect(array2).to.eql(["First item"]);
        });
    });

    describe("Turn a string into an array", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            const empty = stringToArray("");
            const a = stringToArray("a");
            const abc = stringToArray("abc");

            expect(empty instanceof Array).to.equal(true);
            expect(empty).to.eql([]);

            expect(a instanceof Array).to.equal(true);
            expect(a).to.eql(["a"]);

            expect(abc instanceof Array).to.equal(true);
            expect(abc).to.eql(["a", "b", "c"]);
        });
    });

    describe("Turn an array into a string", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            const empty = arrayToString([]);
            const a = arrayToString(["a"]);
            const abc = arrayToString(["a", "b", "c"]);

            expect(empty).to.equal("");
            expect(a).to.equal("a");
            expect(abc).to.equal("abc");
        });
    });

    describe("Turn an array into a readable string", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // You will need to call several different array methods here.
            // Don't worry, you've already learned them.
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB, NO LOOPS! ✏️

            ////////////////////////////////////////////////////////////////////

            const a = arrayToReadableString(["a"]);
            const ab = arrayToReadableString(["a", "b"]);
            const abc = arrayToReadableString(["a", "b", "c"]);
            const abcd = arrayToReadableString(["a", "b", "c", "d"]);

            expect(a).to.equal("a");
            expect(ab).to.equal("a and b");
            expect(abc).to.equal("a, b and c");
            expect(abcd).to.equal("a, b, c and d");
        });
    });
});
