/**
 * ⚠️☝️ INSTRUCTIONS ☝️⚠️
 *
 * - Do not remove any code
 * - Only add or edit code in areas marked with ✏️
 */

describe("strings", function() {
    "use strict";

    describe("Find index of string partial", function() {
        it("should run without errors", function() {
            const text = "The quick brown fox jumps over the lazy dog";

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(findIndexOf("fox")).to.equal(16);
            expect(findIndexOf("dog")).to.equal(40);
        });
    });

    describe("Find last index of string partial", function() {
        it("should run without errors", function() {
            const text = "The quick brown fox jumps over the lazy dog";

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(findLastIndexOf("e")).to.equal(33);
            expect(findLastIndexOf("a")).to.equal(36);
        });
    });

    describe("Get letter at certain position in string", function() {
        it("should run without errors", function() {
            const text = "The quick brown fox jumps over the lazy dog";

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(letterAt(0)).to.equal("T");
            expect(letterAt(4)).to.equal("q");
            expect(letterAt(10)).to.equal("b");
            expect(letterAt(-1)).to.equal("");
        });
    });

    describe("Begins with substring", function() {
        it("should run without errors", function() {
            const text = "The quick brown fox jumps over the lazy dog";

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(beginsWith("The")).to.equal(true);
            expect(beginsWith("The quick brown fox")).to.equal(true);
            expect(beginsWith(text)).to.equal(true);
            expect(beginsWith("")).to.equal(true);
            expect(beginsWith("The lazy dog")).to.equal(false);
        });
    });

    describe("Remove whitespace around string", function() {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(removeWhitespaceAround("   example sentence   ")).to.equal(
                "example sentence"
            );
            expect(removeWhitespaceAround("\n\texample sentence\n\t")).to.equal(
                "example sentence"
            );
        });
    });

    describe("String contains substring", function() {
        it("should run without errors", function() {
            const text = "The quick brown fox jumps over the lazy dog";

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(contains("quick")).to.equal(true);
            expect(contains("fox")).to.equal(true);
            expect(contains("dog")).to.equal(true);
            expect(contains("Quick")).to.equal(false);
            expect(contains("Fox")).to.equal(false);
            expect(contains("hound")).to.equal(false);
        });
    });

    describe("Get substring from string", function() {
        it("should run without errors", function() {
            const text = "The quick brown fox jumps over the lazy dog";

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(cut(0)).to.equal(
                "The quick brown fox jumps over the lazy dog"
            );
            expect(cut(1)).to.equal(
                "he quick brown fox jumps over the lazy dog"
            );
            expect(cut(-1)).to.equal("g");
            expect(cut(-2)).to.equal("og");
            expect(cut(0, 0)).to.equal("");
            expect(cut(0, 1)).to.equal("T");
            expect(cut(0, -1)).to.equal(
                "The quick brown fox jumps over the lazy do"
            );
            expect(cut(1, -1)).to.equal(
                "he quick brown fox jumps over the lazy do"
            );
        });
    });

    describe("Transform to capital letters", function() {
        it("should run without errors", function() {
            const text = "The quick brown fox jumps over the lazy dog";

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE. USE THE STANDARD LIB! ✏️

            ////////////////////////////////////////////////////////////////////

            expect(transformToCapitalLetters()).to.equal(
                "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
            );
        });
    });
});
