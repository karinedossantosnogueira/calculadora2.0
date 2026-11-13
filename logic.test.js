import { test } from "node:test";
import assert from "node:assert/strict";
import { calcular, formatar } from "./logic.js";

test("soma", () => assert.equal(calcular(2, "+", 3), 5));
test("subtração", () => assert.equal(calcular(5, "-", 3), 2));
test("multiplicação", () => assert.equal(calcular(4, "*", 3), 12));
test("divisão", () => assert.equal(calcular(10, "/", 4), 2.5));
test("divisão por zero lança erro", () => assert.throws(() => calcular(1, "/", 0), /zero/));
test("operador inválido lança erro", () => assert.throws(() => calcular(1, "^", 2)));
test("formatar corrige ponto flutuante", () => assert.equal(formatar(0.1 + 0.2), "0.3"));
test("formatar infinito vira Erro", () => assert.equal(formatar(Infinity), "Erro"));
