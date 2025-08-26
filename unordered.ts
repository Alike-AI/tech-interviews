
import { assertEquals } from "jsr:@std/assert";

const cases = {
    "test0": {
        "output": [1, 2, 3],
        "answer": [3, 2, 1],
        "matching": true
    },
    "test1": {
        "output": [1, {foo: 2}, 3, {bar: {baz: 4}}],
        "answer": [{foo: 2}, 3, 1, {bar: {baz: 4}}],
        "matching": true
    },
    "test2": {
        "output": [1, {foo: 2}, 3, {bar: {baz: 4}}],
        "answer": [{foo: 2}, 3, 1, {bar: {bab: 4}}],
        "matching": false
    },
    "test3": {
        "output": [1, {foo: 2}, 3, {bar: {baz: 4}}],
        "answer": [1, {bar: {baz: 4}}, 3],
        "matching": false
    }
}

// compare two unordered arrays of objects to ensure they have
// the identical set of elements.
function compare_outputs(output: any[], answer: any[]): boolean {
    // todo: implement this
    return false;
}

Object.entries(cases).forEach(([key, value]) => {
    Deno.test(key, () => {
        const { output, answer, matching } = value;
        assertEquals(compare_outputs(output, answer), matching);
    });
});






