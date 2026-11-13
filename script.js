import { calcular, formatar } from "./logic.js";

const atualEl = document.getElementById("atual");
const histEl = document.getElementById("historico");
const simbolos = { "/": "÷", "*": "×", "-": "−", "+": "+" };

let atual = "0";
let anterior = null;
let operador = null;
let novoNumero = true;

function render() {
  atualEl.textContent = atual;
  histEl.textContent = operador ? `${anterior} ${simbolos[operador]}` : "";
}

function erro() {
  atual = "Erro";
  anterior = null;
  operador = null;
  novoNumero = true;
}

function digitar(d) {
  if (atual === "Erro") atual = "0";
  if (novoNumero) { atual = d; novoNumero = false; }
  else if (atual.length < 15) atual = atual === "0" ? d : atual + d;
}

function ponto() {
  if (atual === "Erro" || novoNumero) { atual = "0."; novoNumero = false; return; }
  if (!atual.includes(".")) atual += ".";
}

function escolherOperador(op) {
  if (atual === "Erro") return;
  if (operador && !novoNumero) igual();
  if (atual === "Erro") return;
  anterior = atual;
  operador = op;
  novoNumero = true;
}

function igual() {
  if (!operador || atual === "Erro") return;
  try {
    const r = calcular(parseFloat(anterior), operador, parseFloat(atual));
    atual = formatar(r);
    anterior = null;
    operador = null;
    novoNumero = true;
  } catch {
    erro();
  }
}

function acao(nome) {
  if (nome === "limpar") { atual = "0"; anterior = null; operador = null; novoNumero = true; }
  else if (nome === "apagar") {
    if (novoNumero || atual === "Erro") return;
    atual = atual.length > 1 ? atual.slice(0, -1) : "0";
  }
  else if (nome === "porcento" && atual !== "Erro") atual = formatar(parseFloat(atual) / 100);
  else if (nome === "ponto") ponto();
  else if (nome === "igual") igual();
}

document.querySelector(".teclas").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.num) digitar(b.dataset.num);
  else if (b.dataset.op) escolherOperador(b.dataset.op);
  else if (b.dataset.acao) acao(b.dataset.acao);
  render();
});

// Suporte ao teclado
document.addEventListener("keydown", (e) => {
  if (/^\d$/.test(e.key)) digitar(e.key);
  else if ("+-*/".includes(e.key)) escolherOperador(e.key);
  else if (e.key === "." || e.key === ",") ponto();
  else if (e.key === "Enter" || e.key === "=") { e.preventDefault(); igual(); }
  else if (e.key === "Backspace") acao("apagar");
  else if (e.key === "Escape") acao("limpar");
  else return;
  render();
});

render();
