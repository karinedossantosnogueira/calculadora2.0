# 🧮 Calculadora

Calculadora web feita com HTML, CSS e JavaScript. Funciona com mouse e teclado.

## Recursos
- Soma, subtração, multiplicação e divisão
- Porcentagem, apagar e limpar
- Tratamento de divisão por zero
- Testes automáticos com o Node.js
- Publicação automática no GitHub Pages

## Rodar localmente
```bash
npm test                 # roda os testes
python3 -m http.server   # abra http://localhost:8000
```
(Os módulos JS exigem um servidor local; abrir o `index.html` direto não funciona.)

## Atalhos de teclado
Números, `+ - * /`, `.`, `Enter` (=), `Backspace` (apagar), `Esc` (limpar).

## Estrutura
| Arquivo | Função |
|---|---|
| `index.html` | Estrutura da página |
| `style.css` | Visual |
| `logic.js` | Contas (testável) |
| `script.js` | Interação com a tela |
| `logic.test.js` | Testes |
| `.github/workflows/ci-cd.yml` | Testa e publica no Pages |

## Licença
MIT
