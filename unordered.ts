
import { cases } from "./testcases.ts";
import { assertEquals } from "jsr:@std/assert";

function compare_value(a: any, b: any): boolean {
    // todo: implement this
    return true;
}

function compare_outputs(output: Record<string, any>[], answer: Record<string, any>[]): boolean {
    // todo: implement this
    return true;
}

Object.entries(cases).forEach(([key, value]) => {
    Deno.test(key, () => {
        const { output, answer, matching } = value;
        assertEquals(compare_outputs(output, answer), matching);
    });
});






