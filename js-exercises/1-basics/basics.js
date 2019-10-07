/**
 * INSTRUCTIONS:
 *
 * 1. Do not remove any code
 * 2. Replace ADD CODE HERE with real code
 * 3. Modifying code is only allowed below EDIT NEXT LINE
 */
describe("basics", function() {
    "use strict";

    describe("test example", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(a).to.equal(true);
        });
    });

    describe("test 1", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(typeof a).to.equal("undefined");
            expect(a).to.equal(undefined);
        });
    });

    describe("test 2", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(typeof a).to.equal("undefined");
            expect(a == null).to.equal(true);
            expect(a === null).to.equal(false);
        });
    });

    describe("test 3", function() {
        it("should run without errors", function() {
            expect(a).to.equal(undefined);

            /* ADD CODE HERE */
        });
    });

    describe("test 4", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(b == 3).to.equal(true);
            expect(b === 3).to.equal(true);

            /* ADD CODE HERE */

            expect(c == 3).to.equal(true);
            expect(c === 3).to.equal(false);
        });
    });

    describe("test 5", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(a.length).to.equal(3);
            expect(Number(a)).to.equal(1000000);
        });
    });

    describe("test 6", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(a.length).to.equal(3);
            expect(parseInt(a)).to.equal(10);
        });
    });

    describe("test 7", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(a.length).to.equal(2);
            expect(1 - a).to.equal(0.8);
        });
    });

    describe("test 8", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(c).to.be.an.instanceof(Object);
            expect(c.a).to.equal(1);

            /* ADD CODE HERE */

            expect(c.a).to.equal(undefined);
            expect(c.hasOwnProperty("a")).to.equal(true);
            expect("a" in c).to.equal(true);

            /* ADD CODE HERE */

            expect(c.hasOwnProperty("a")).to.equal(false);
            expect("a" in c).to.equal(false);
        });
    });

    describe("test 9", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(d).to.eql([1, 2, 3]);
            expect(e).to.eql([1, 2, 3]);

            d.push(4);

            expect(d).to.eql([1, 2, 3, 4]);
            expect(e).to.eql([1, 2, 3, 4]);

            /* ADD CODE HERE */

            d.pop();

            expect(d).to.eql([1, 2, 3]);
            expect(e).to.eql([1, 2, 3, 4]);
        });
    });

    describe("test 10", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(f).to.be.instanceOf(Array);
            expect(f.length).to.equal(100);
        });
    });

    describe("test 11", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(typeof g).to.equal("number");
            expect(typeof h).to.equal("string");
            expect(h - g).to.equal(-2);
            expect(g + h).to.equal("31");
        });
    });

    describe("test 12", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(typeof i).to.equal("number");
            expect(i == false).to.equal(true);
        });
    });

    describe("test 13", function() {
        it("should run without errors", function() {
            /* ADD CODE HERE */

            expect(typeof j).to.equal("string");
            expect(j == false).to.equal(true);
        });
    });

    describe("test 14", function() {
        it("should run without errors", function() {
            var hasBeenCalled = false;

            /* ADD CODE HERE */

            expect(typeof k).to.equal("object");
            if (!k) {
                hasBeenCalled = true;
            }
            expect(hasBeenCalled).to.equal(true);
        });
    });

    describe("test 15", function() {
        it("should run without errors", function() {
            var obj = {
                a: 1,
                b: 2
            };

            /* ADD CODE HERE */

            expect(obj[key]).to.equal(1);

            /* ADD CODE HERE */

            expect(obj[key]).to.equal(2);
        });
    });

    describe("test 16", function() {
        it("should run without errors", function() {
            var obj1 = {
                a: 1,
                b: 2
            };

            expect(obj2.a).to.equal(1);
            expect(obj2.b).to.equal(2);
            expect(obj2).to.equal(obj1);

            /* ADD CODE HERE */

            expect(obj2.a).to.equal(1);
            expect(obj2.b).to.equal(2);
            expect(obj2).to.not.equal(obj1);
        });
    });

    describe("test 17", function() {
        it("should run without errors", function() {
            var i;

            /* ADD CODE HERE */

            for (i = 0; i < 50; i++) {
                expect(obj.obj).to.equal(obj);
                obj = obj.obj;
            }
        });
    });
});
