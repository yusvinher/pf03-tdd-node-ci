import { describe, it, expect } from "vitest";
import { fibonacci } from "../src/fibonacci.js";

describe("Función fibonacci", () => {

    it("debe lanzar RangeError para números negativos", () => {
        expect(() => fibonacci(-1))
            .toThrow("solo números enteros ≥ 0");
    });

    it("debe devolver 0 para n = 0", () => {
        expect(fibonacci(0)).toBe(0);
    });

    it("debe devolver 1 para n = 1", () => {
        expect(fibonacci(1)).toBe(1);
    });

    it("debe devolver 1 para n = 2", () => {
        expect(fibonacci(2)).toBe(1);
    });

    it("debe devolver 2 para n = 3", () => {
        expect(fibonacci(3)).toBe(2);
    });

    it("debe devolver 3 para n = 4", () => {
        expect(fibonacci(4)).toBe(3);
    });

    it("debe devolver 5 para n = 5", () => {
        expect(fibonacci(5)).toBe(5);
    });

    it("debe devolver 13 para n = 7", () => {
        expect(fibonacci(7)).toBe(13);
    });

});