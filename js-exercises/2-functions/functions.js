/**
 * ⚠️☝️ INSTRUCTIONS ☝️⚠️
 *
 * - Do not remove any code
 * - Only add or edit code in areas marked with ✏️
 */

describe("functions", function() {
    "use strict";

    describe("Function declaration", () => {
        it("should run without errors", function() {
            myFunction(); // myFunction should already be callable here

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////
        });
    });

    describe("Function expression", () => {
        it("should run without errors", function() {
            expect(() => {
                myFunction(); // myFunction should NOT yet be callable here
            }).to.throw("Cannot access 'myFunction' before initialization");

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            myFunction(); // myFunction should be callable now
        });
    });

    describe("Function alias", () => {
        it("should run without errors", function() {
            function myFunction() {}

            ////////////////////////////////////////////////////////////////////
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            if (myFunction !== otherFunction) {
                throw new Error(
                    "myFunction and otherFunction should be the same function"
                );
            }
        });
    });

    describe("Named function expression", () => {
        it("should run without errors", function() {
            const otherFunction = function myFunction() {};

            ////////////////////////////////////////////////////////////////////
            // ✏️ EDIT LINE BELOW ✏️
            myFunction(); // why is myFunction not callable?
            ////////////////////////////////////////////////////////////////////
        });
    });

    describe("Called without explicit context", () => {
        it("should run without errors", function() {
            function getContext() {
                return this; // <--- we just return whatever 'this' is
            }

            ////////////////////////////////////////////////////////////////////
            // Declare a constant 'answer' with the correct result.
            // If you call getContext() here, you're a cheater! :)
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            const result = getContext(); // <--- called without explicit context

            if (answer !== result) {
                throw new Error("Wrong answer :(");
            }
        });
    });

    describe("Called with explicit context", () => {
        it("should run without errors", function() {
            function getContext() {
                return this;
            }

            const context = {};

            ////////////////////////////////////////////////////////////////////
            // Declare three constants 'answerFirstResult', 'answerSecondResult'
            // and 'answerThirdResult' with the correct results.
            // If you call getContext() here, you're a cheater! :)
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            // First we call the function without an explicit context
            const firstResult = getContext();
            // We call the same function but now with an explicit context
            const secondResult = getContext.call(context);
            // And now we call the same function but without an explicit context again
            const thirdResult = getContext();

            if (answerFirstResult !== firstResult) {
                throw new Error("answerFirstResult was not correct :(");
            }
            if (answerSecondResult !== secondResult) {
                throw new Error("answerSecondResult was not correct :(");
            }
            if (answerThirdResult !== thirdResult) {
                throw new Error("answerThirdResult was not correct :(");
            }
        });
    });

    describe("Called on an object", () => {
        it("should run without errors", function() {
            const object = {
                getContext: function() {
                    return this;
                }
            };
            const differentObject = {
                getContext: object.getContext
            };

            ////////////////////////////////////////////////////////////////////
            // Declare two constants 'answerFirstResult'
            // and 'answerSecondResult' with the correct results.
            // If you call getContext() here, you're a cheater! :)
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            // First we call the function on an object
            const firstResult = object.getContext();
            // Then we call the same function on a different object
            const secondResult = differentObject.getContext();

            if (answerFirstResult !== firstResult) {
                throw new Error("answerFirstResult was not correct :(");
            }
            if (answerSecondResult !== secondResult) {
                throw new Error("answerSecondResult was not correct :(");
            }
        });
    });

    describe("Bound function", () => {
        it("should run without errors", function() {
            const context = {};
            const differentContext = {};

            let getContext = function() {
                return this;
            };

            ////////////////////////////////////////////////////////////////////
            // Is there something stronger than .call()?
            // You're not allowed to define a new function here.
            // If you call getContext() here, you're a cheater! :)
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            const result = getContext.call(context);

            if (result !== differentContext) {
                throw new Error("result should be 'differentContext'");
            }
            if (getContext.toString() !== "function () { [native code] }") {
                throw new Error(
                    "You cheated! You're not allowed to define a new function"
                );
            }
        });
    });

    describe("Stronger than .bind()", () => {
        it("should run without errors", function() {
            const context = {};
            let hasBeenCalled = false;

            const getContext = function() {
                hasBeenCalled = true;
                return this;
            }.bind(context); // <-- we call .bind() on the anonymous function.
            // getContext is now a function bound to 'context'

            ////////////////////////////////////////////////////////////////////
            // Is there something even stronger than .bind()?
            // Find a way to call getContext(), but with a different context than 'context'.
            // ✏️ EDIT LINE BELOW ✏️
            const result = getContext();
            ////////////////////////////////////////////////////////////////////

            if (result === context) {
                throw new Error("result should NOT be 'context'");
            }
            if (hasBeenCalled === false) {
                throw new Error(
                    "getContext() hasn't been called. You should still call getContext()"
                );
            }
        });
    });

    describe("Accessing arguments", () => {
        it("should run without errors", function() {
            function returnTheFirstArgument() {
                ////////////////////////////////////////////////////////////////////
                // The function is supposed to return the first argument.
                // Unfortunately, it does not specify any parameters.
                // Find a way to retrieve the first argument without specifying a parameter.
                // ✏️ ADD CODE HERE ✏️

                ////////////////////////////////////////////////////////////////////
            }

            const calledWithA = returnTheFirstArgument("A");
            const calledWithB = returnTheFirstArgument("B");

            if (calledWithA !== "A" || calledWithB !== "B") {
                throw new Error(
                    "returnTheFirstArgument() does not return the first argument."
                );
            }
        });
    });

    describe("Number of arguments", () => {
        it("should run without errors", function() {
            function returnNumberOfArguments() {
                ////////////////////////////////////////////////////////////////////
                // The function is supposed to return the number of given arguments.
                // Find a way to retrieve the number from here.
                // You should not write any if's here. It should work for all possible numbers.
                // ✏️ ADD CODE HERE ✏️

                ////////////////////////////////////////////////////////////////////
            }

            // We're calling the function with three different numbers of parameters here.
            // Your implementation should work for all numbers, not with just the examples here.
            const calledWithNoArguments = returnNumberOfArguments();
            const calledWithOneArgument = returnNumberOfArguments("a");
            const calledWithTwoArguments = returnNumberOfArguments("a", "b");

            if (
                calledWithNoArguments !== 0 ||
                calledWithOneArgument !== 1 ||
                calledWithTwoArguments !== 2
            ) {
                throw new Error(
                    "returnNumberOfArguments() does not return the number of arguments."
                );
            }
        });
    });

    describe("Shadowing", () => {
        it("should run without errors", function() {
            const myConst = false;

            function myFunction() {
                ////////////////////////////////////////////////////////////////////
                // 'myConst' is defined in the upper scope as const.
                // This means that we can't change it.
                // Is there a way to still make 'myConst' equal true here?
                // ✏️ ADD CODE HERE ✏️

                ////////////////////////////////////////////////////////////////////

                if (myConst !== true) {
                    throw new Error("myConst should be true here");
                }
            }

            myFunction();
        });
    });

    describe("Some declarations are function scoped", () => {
        it("should run without errors", function() {
            function myFunction() {
                if (myVariable !== undefined) {
                    throw new Error("myVariable should be defined here.");
                } else {
                    ////////////////////////////////////////////////////////////////////
                    // The if() clause above is accessing 'myVariable', but it hasn't been defined yet.
                    // However, in this exercise you're only allowed to add code here.
                    // Is there a way to define a variable in a way that the code above will work?
                    // ✏️ ADD CODE HERE ✏️

                    ////////////////////////////////////////////////////////////////////
                }
            }

            myFunction();
        });
    });

    describe("A function that returns a function", () => {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // Can you implement a function 'myFunction' that returns a function?
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            const result = myFunction();

            if (typeof result !== "function") {
                throw new Error(
                    "myFunction() did not return a function, instead saw " +
                        typeof result
                );
            }
        });
    });

    describe("A function that returns a reference to itself", () => {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // Can you implement a function 'myFunction' that returns a reference to itself?
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            const result = myFunction();

            if (result !== myFunction) {
                throw new Error(
                    "myFunction() did not return a reference to itself, instead saw " +
                        typeof result
                );
            }
        });
    });

    describe("Break the loop", () => {
        it("should run without errors", function() {
            function breakTheLoop() {
                ////////////////////////////////////////////////////////////////////
                // Uh-oh, the function 'breakTheLoop' calls itself recursively (see below).
                // There are two possible solutions that break the loop. Can you find both?
                // ✏️ ADD CODE HERE ✏️

                ////////////////////////////////////////////////////////////////////

                breakTheLoop(); // Recursive call
            }

            breakTheLoop();
        });
    });

    describe("Storing the number of arguments", () => {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // Can you implement a function 'myFunction' that returns a function
            // which returns the number of arguments of 'myFunction' when called?
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            // Look at that strange code: myFunction()().
            // Looks like we're calling myFunction twice but we are actually calling
            // the returned result from 'myFunction'.
            // So, first we call 'myFunction', then the result of 'myFunction'.
            const calledWithNoArguments = myFunction()();
            // Now we're calling 'myFunction' with one parameter.
            // The returned function should return the number 1.
            const calledWithOneArgument = myFunction("a")();
            // Now we're calling 'myFunction' with two parameters
            // The returned function should return the number 2.
            const calledWithTwoArguments = myFunction("a", "b")();

            if (
                calledWithNoArguments !== 0 ||
                calledWithOneArgument !== 1 ||
                calledWithTwoArguments !== 2
            ) {
                throw new Error(
                    "The returned function from myFunction() does not return the correct number of arguments."
                );
            }
        });
    });

    describe("Passing a function as an argument", () => {
        it("should run without errors", function() {
            let hasBeenCalled = false;

            function passMeAFunction(someFunction) {
                if (typeof someFunction !== "function") {
                    throw new Error("You did not pass ");
                }
                hasBeenCalled = true;
            }

            ////////////////////////////////////////////////////////////////////
            // Can you implement a function that takes a function as an argument,
            // executes it and returns the result?
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            if (hasBeenCalled === false) {
                throw new Error("passMeAFunction() has not been called");
            }
        });
    });

    describe("Accepting a function as an argument", () => {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // Can you implement a function that takes a function as an argument,
            // executes it and returns the result?
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            // Now we're calling 'myFunction' and we're passing a function as an argument.
            const shouldBeA = myFunction(function() {
                return "A";
            });
            const shouldBeB = myFunction(function() {
                return "B";
            });
            const shouldBeC = myFunction(function() {
                return "C";
            });

            if (shouldBeA !== "A" || shouldBeB !== "B" || shouldBeC !== "C") {
                throw new Error(
                    "'myFunction' does not return the result of the given function"
                );
            }
        });
    });

    describe("Implementing forEach()", () => {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // Can you implement a function named 'forEach' that:
            // - takes a function 'fn' as first argument
            // - takes an array as second argument
            // - calls the given function 'fn' for each element in the array with:
            //   - the first argument being the element in the array
            //   - the second argument being the current index in the array
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            // To test your implementation, we capture all arguments passed to 'fn'
            // in this array.
            let calls;

            function captureArguments(element, index) {
                calls.push("element = " + element + ", index = " + index);
            }

            // When called with an empty array, forEach should not call the given function 'fn'
            calls = [];
            forEach(captureArguments, []);
            if (calls.length !== 0) {
                throw new Error(
                    "The given function 'fn' should not be called when the given array is empty"
                );
            }

            // When called with an array of three elements, forEach should call the given function 'fn'
            // three times each with the current element and index.
            calls = [];
            forEach(captureArguments, ["A", "B", "C"]);
            if (calls[0] !== "element = A, index = 0") {
                throw new Error(
                    "The given function 'fn' should be called with element = A, index = 0 during the first iteration but has been called with " +
                        calls[0]
                );
            }
            if (calls[1] !== "element = B, index = 1") {
                throw new Error(
                    "The given function 'fn' should be called with element = B, index = 1 during the second iteration but has been called with " +
                        calls[1]
                );
            }
            if (calls[2] !== "element = C, index = 2") {
                throw new Error(
                    "The given function 'fn' should be called with element = C, index = 2 during the third iteration but has been called with " +
                        calls[2]
                );
            }
        });
    });

    describe("Implementing map()", () => {
        it("should run without errors", function() {
            ////////////////////////////////////////////////////////////////////
            // Can you implement a function named 'map' that:
            // - takes a function 'fn' as first argument
            // - takes an array as second argument
            // - calls the given function 'fn' for each element in the array with:
            //   - the first argument being the element in the array
            //   - the second argument being the current index in the array
            // - stores the result of 'fn' in an array at the current position
            // - returns the array with results in the end
            // ✏️ ADD CODE HERE ✏️

            ////////////////////////////////////////////////////////////////////

            let results;

            // When called with an empty array, the result should also be an empty array.
            // The given function 'fn' should also not be called.
            results = map(function() {
                throw new Error(
                    "The given function 'fn' should not be called when the array is empty"
                );
            }, []);
            if (results.length !== 0) {
                throw new Error(
                    "map() should return an empty array when the given array is also empty"
                );
            }

            // When called with an array of three elements, the result should also be an array
            // of three elements.
            // The given function 'fn' should have been called three times and each result
            // of 'fn' should be stored in the final array of results.
            results = map(
                function(element, index) {
                    return "element = " + element + ", index = " + index;
                },
                ["A", "B", "C"]
            );
            if (results[0] !== "element = A, index = 0") {
                throw new Error(
                    "The result of the first iteration should be 'element = A, index = 0' but was '" +
                        results[0] +
                        "'"
                );
            }
            if (results[1] !== "element = B, index = 1") {
                throw new Error(
                    "The result of the second iteration should be 'element = B, index = 1' but was '" +
                        results[1] +
                        "'"
                );
            }
            if (results[2] !== "element = C, index = 2") {
                throw new Error(
                    "The result of the third iteration should be 'element = C, index = 2' but was '" +
                        results[2] +
                        "'"
                );
            }
        });
    });

    /**
     * 🐛🛠 FIX THE BUG 🛠🐛
     *
     * The following tests show simplified real-world scenarios
     * with a bug. Can you fix them?
     */

    describe("Lost context", () => {
        it("should run without errors", function() {
            // This is our event emitter. You can register event listeners
            // by calling addEventListener(). As soon as there is an event,
            // it notifies all listeners by calling them.
            const eventEmitter = {
                listeners: [],
                addEventListener(listener) {
                    this.listeners.push(listener);
                },
                emit() {
                    for (const listener of this.listeners) {
                        listener();
                    }
                }
            };
            // This is an instance of an example service with two different methods.
            const service = {
                handleEvent() {
                    // Here we're calling doSomething() on this, but the call
                    // will fail with this message:
                    // Cannot read property 'doSomething' of undefined
                    this.doSomething();
                },
                doSomething() {
                    // do something, the actual implementation doesn't matter
                }
            };

            // Now we're registering the service.handleEvent method so that
            // it will be called as soon as the event is emitted.
            eventEmitter.addEventListener(service.handleEvent);
            // Now let's emit the event. However, this will fail.
            // Find the reason why and fix it.
            eventEmitter.emit();
        });
    });

    describe("Removing an event listener that has been created with .bind()", () => {
        it("should run without errors", function() {
            // This is our example event listener again. This time, it provides a
            // method that allows to remove event listeners again.
            const eventEmitter = {
                listeners: [],
                addEventListener(listener) {
                    this.listeners.push(listener);
                },
                // The removeEventListener() implementation looks if the listener has been registered previously.
                // It throws an error if not.
                // Please note: Most real-world implementations of an event emitter would even not throw an error.
                // The would just ignore this kind of error. Then the event listener would still be active and
                // you would be wondering why because you thought that you've removed it.
                removeEventListener(listener) {
                    const index = this.listeners.indexOf(listener);

                    if (index === -1) {
                        throw new Error(
                            "Cannot remove an unknown listener. This listener has never been registered"
                        );
                    }

                    this.listeners.splice(index, 1);
                }
            };
            const service = {
                handleEvent() {
                    // do something, the actual implementation doesn't matter
                }
            };

            // Now this time we've done it right: we .bind() the event handler before passing it to addEventListener().
            eventEmitter.addEventListener(service.handleEvent.bind(service));
            // But this will fail with an error. Apparently, the given listener is not stored in the 'listeners' array.
            // Find the reason and fix it.
            eventEmitter.removeEventListener(service.handleEvent);
        });
    });

    describe("Loosing context again", () => {
        it("should run without errors", function() {
            const object = {
                myMethod: function() {
                    return function() {
                        this.doSomething();
                        this.doAnotherThing();
                    };
                },
                doSomething: function() {},
                doAnotherThing: function() {}
            };

            // Same as in one of the tests above:
            // First we're calling myMethod(). Then we're calling
            // the result of myMethod() which is the returned function.
            // The problem is, however, that 'this' does not point to
            // 'object' anymore. The context was lost.
            // Can you fix it?
            object.myMethod()();
        });
    });

    describe("Calling array methods on 'arguments'", () => {
        it("should run without errors", function() {
            function calculateSum() {
                let result = 0;

                arguments.forEach(function(number) {
                    result = result + number;
                });

                return result;
            }

            const sum = calculateSum(3, 5, 7, 9);

            if (sum !== 24) {
                throw new Error(
                    "The returned sum should be 24, but it was " + sum
                );
            }
        });
    });
});
