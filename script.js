const expressaoInput = document.getElementById("expressao");
const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");
const resultadoDiv = document.getElementById("resultado");

calculateBtn.addEventListener("click", () => {
  const expressao = expressaoInput.value;
  if (expressao) {
    try {
      const result = eval(expressao);
      resultadoDiv.innerHTML = `Resultado: ${result}`;
    } catch (error) {
        resultadoDiv.innerHTML = "Expressão inválida!";
    }
  }
});

clearBtn.addEventListener("click", () => {
    expressaoInput.value = "";
    resultadoDiv.innerHTML = "";
});


/* SCRIPT IMAGEM */

const quoteInput = document.getElementById("quote-input");
const quoteOverlay = document.getElementById("quote-overlay");

quoteInput.addEventListener("input", () => {
  quoteOverlay.textContent = quoteInput.value;
});


/* DATA */
const data = new Date();
const mes = data.toLocaleString('default', { month: 'long' });
const dia = data.getDate();
const ano = data.getFullYear();

document.getElementById('data').textContent = `${dia} de ${mes}, ${ano}`;

function mudarCor(quadrado) {
    quadrado.style.backgroundColor = "lightblue";
}
  
function voltarCor(quadrado) {
    quadrado.style.backgroundColor = "blue";
}


  function mostrarNome() {
    const nome = document.getElementById('nome').value;
    document.getElementById('nome1').textContent = nome;
    document.getElementById('nome2').textContent = nome;
    document.getElementById('nome3').textContent = nome;
    
    // Adiciona animação de fade in aos elementos que exibem o nome
    const nomeElements = document.querySelectorAll('[id^="nome"]');
    nomeElements.forEach(element => {
      element.style.opacity = '1';
    });
  }

  function toggleDarkMode() {
    const body = document.querySelector('body');
    const footer = document.querySelector('footer');
    const expressao = document.querySelector('#expressao');
    const calculateBtn = document.querySelector('#calculate-btn');
    const clearBtn = document.querySelector('#clear-btn');
    const darkmodeToggle = document.querySelector('#darkmode-toggle');
    body.classList.toggle('darkmode');
    expressao.classList.toggle('darkmode');
    calculateBtn.classList.toggle('darkmode');
    clearBtn.classList.toggle('darkmode');
    footer.classList.toggle('darkmode');
    darkmodeToggle.classList.toggle('darkmode');
  }