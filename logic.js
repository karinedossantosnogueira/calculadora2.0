// Lógica pura da calculadora (sem DOM), fácil de testar.

export function calcular(a, op, b) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) throw new Error("Divisão por zero");
      return a / b;
    default:
      throw new Error("Operação inválida");
  }
}

// Evita resultados como 0.1 + 0.2 = 0.30000000000000004
export function formatar(n) {
  if (!Number.isFinite(n)) return "Erro";
  return String(parseFloat(n.toPrecision(12)));
}
