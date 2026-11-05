import { describe, it, expect } from "vitest";
import { esPinValido } from "../src/pin.js";

describe("Función esPinValido", () => {

    it("debe devolver false si el pin es null", () => {
        expect(esPinValido(null)).toBe(false);
    });

    it("debe devolver false si el pin es undefined", () => {
        expect(esPinValido(undefined)).toBe(false);
    });

    it("debe devolver false si el pin está vacío", () => {
        expect(esPinValido("")).toBe(false);
    });

    it("debe devolver false si la longitud no es 4 ni 6", () => {
        expect(esPinValido("123")).toBe(false);
        expect(esPinValido("12345")).toBe(false);
        expect(esPinValido("1234567")).toBe(false);
    });

    it("debe devolver false si contiene caracteres no numéricos", () => {
        expect(esPinValido("12a4")).toBe(false);
        expect(esPinValido("abcd")).toBe(false);
        expect(esPinValido("12-4")).toBe(false);
    });

    it("debe devolver false si todos los dígitos son iguales", () => {
        expect(esPinValido("1111")).toBe(false);
        expect(esPinValido("888888")).toBe(false);
        expect(esPinValido("3333")).toBe(false);
    });

    it("debe devolver true para un pin válido de 4 dígitos", () => {
        expect(esPinValido("1234")).toBe(true);
    });

    it("debe devolver true para un pin válido de 6 dígitos", () => {
        expect(esPinValido("123456")).toBe(true);
    });

});