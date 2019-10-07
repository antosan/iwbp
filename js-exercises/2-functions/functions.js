/**
 * INSTRUCTIONS:
 *
 * 1. Do not remove any code
 * 2. Replace ADD CODE HERE with real code
 * 3. Modifying code is only allowed below EDIT NEXT LINE
 */
describe("functions", function() {
    "use strict";

    describe("test 1", function() {
        it("should run without errors", function() {
            expect(typeof a).to.equal("function");

            /* ADD CODE HERE */
        });
    });

    describe("test 2", function() {
        it("should run without errors", function() {
            /* EDIT NEXT LINE */
            var b = function c() {};

            expect(typeof b).to.equal("function");
            expect(b === c).to.equal(true);
        });
    });

    describe("test 3", function() {
        it("should run without errors", function() {
            var number = 0;

            function incrementNumber() {
                number++;
            }

            /* ADD CODE HERE */

            d();

            expect(number).to.equal(1);
        });
    });

    describe("test 4", function() {
        it("should run without errors", function() {
            function e() {
                return this;
            }

            expect(typeof e /* ADD CODE HERE */).to.equal("undefined");
        });
    });

    describe("test 5", function() {
        it("should run without errors", function() {
            var o = { a: 0 };

            function increment() {
                this.a++;
            }

            /* EDIT NEXT LINE */
            increment();

            expect(o.a).to.equal(1);
        });
    });

    describe("test 6", function() {
        it("should run without errors", function() {
            var o = { a: 0 };

            o.increment = function() {
                this.a++;
            };

            function decrement() {
                this.a--;
            }

            /* ADD CODE HERE */

            o.increment();

            expect(o.a).to.equal(-1);
        });
    });

    describe("test 7", function() {
        it("should run without errors", function() {
            var o = {};
            var hasBeenCalled = false;

            o.increment = function() {
                hasBeenCalled = true;
                expect(this).to.not.equal(o);
            };

            /* ADD CODE HERE */

            o.increment();

            expect(hasBeenCalled).to.equal(true);
        });
    });

    describe("test 8", function() {
        it("should run without errors", function() {
            var o = {};
            var hasBeenCalled = false;

            function fn() {
                hasBeenCalled = true;
                expect(this).to.not.equal(o);
            }
            fn = fn.bind(o);

            /* EDIT NEXT LINE */
            fn();

            expect(hasBeenCalled).to.equal(true);
        });
    });

    describe("test 9", function() {
        it("should run without errors", function() {
            function fn() {
                /* ADD CODE HERE */
            }

            (function() {
                var o1 = {};
                var o2 = fn(o1);

                expect(o1 === o2).to.equal(true);
            })();
        });
    });

    describe("test 10", function() {
        it("should run without errors", function() {
            function fn() {
                /* ADD CODE HERE */
            }

            expect(fn("a", "b", "c")).to.equal(3);
            expect(fn("a", "b", "c", "d")).to.equal(4);
        });
    });

    describe("test 11", function() {
        it("should run without errors", function() {
            var i = 0;

            function increment() {
                /* ADD CODE HERE */

                i++;
            }

            increment();
            increment();
            increment();

            expect(i).to.equal(0);
        });
    });

    describe("test 12", function() {
        it("should run without errors", function() {
            function fn() {
                i = 0;
            }

            fn();

            expect(i).to.equal(0);

            if (i !== 0) {
                /* ADD CODE HERE */
            }
        });
    });

    describe("test 13", function() {
        it("should run without errors", function() {
            function fn() {
                /* ADD CODE HERE */
            }

            expect(fn()).to.equal(fn);
        });
    });

    describe("test 14", function() {
        it("should run without errors", function() {
            function fn() {
                /* ADD CODE HERE */
            }

            expect(typeof fn()).to.equal("function");
            expect(fn()).to.not.equal(fn);
        });
    });

    describe("test 15", function() {
        it("should run without errors", function() {
            function fn() {
                /* ADD CODE HERE */

                return fn;
            }

            expect(fn()).to.equal(undefined);
        });
    });

    describe("test 16", function() {
        it("should run without errors", function() {
            function fn() {
                /* ADD CODE HERE */
            }

            expect(fn("a", "b", "c")()).to.equal(3);
            expect(fn("a", "b", "c", "d")()).to.equal(4);
        });
    });

    describe("test 17", function() {
        it("should run without errors", function() {
            var o = {
                a: 0,
                fn: fn
            };

            function fn(o) {
                function fn() {
                    this.a++;
                }

                /* ADD CODE HERE */

                return fn;
            }

            o.fn(o)();

            expect(o.a).to.equal(1);
        });
    });

    describe("test 18", function() {
        it("should run without errors", function(done) {
            var error = true;

            function callback() {
                if (error) {
                    done("Error");
                } else {
                    done();
                }
            }

            function giveMeA(callback) {
                setTimeout(callback, 50); // executes callback after 50ms
            }

            /* ADD CODE HERE */

            error = false;
        });
    });

    describe("test 19", function() {
        it("should run without errors", function() {
            var o = {
                a: 0,
                fn: function() {
                    callFn(
                        function() {
                            this.a++;
                        } /* ADD CODE HERE */
                    );
                }
            };

            function callFn(fn) {
                fn();
            }

            o.fn();

            expect(o.a).to.equal(1);
        });
    });

    describe("test 20", function() {
        it("should run without errors", function() {
            var arr;

            arr = ["a", "b", "c"]
                .map(function(letter) {
                    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                    /* ADD CODE HERE */
                })
                .reduce(function(str, letter) {
                    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
                    /* ADD CODE HERE */
                }, "");

            expect(arr).to.equal("ABC");
        });
    });
});
