type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {

    let counter = init;

    function reset() {
        counter = init;
        return counter;
    }

    function increment() {
        counter++;
        return counter;
    }

    function decrement() {
        counter--;
        return counter;
    }

    return {increment, decrement, reset};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */