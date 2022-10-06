let escolhas = document.querySelector("select");

escolhas.addEventListener("change", function (evento) {
  evento.preventDefault();

  let incremento = document.getElementById("valorIncremento");

  if (evento.target.value == "cCesar") {
    incremento.style = "display: flex";
  } else {
    incremento.style = "display: none";
  }
});


let btn = document.querySelectorAll('input[name="codific"]');

btn.forEach((radio) => {
  radio.addEventListener("change", function (evento) {
    evento.preventDefault();

    let botao = document.getElementById("submit");

    if (evento.target.value == "decodificar") {
      botao.innerHTML = "Decodificar";
      document.querySelector("html");
    } else {
      botao.innerHTML = "Codificar";
      document.querySelector("html");
    }
  });
});


let formulario = document.forms.formulario;

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let texto = formulario.texto.value;
  let escolha = formulario.escolherCod.value;
  let boto = formulario.codific.value;
  let numerIncremento = formulario.numeroIncrementos.value;
  let mensagemr = "";

  if (escolha == "cCesar") {
    mensagemr = cesar(boto, texto, numerIncremento);
  } else {
    mensagemr = base64(boto, texto);
  }

  let resultadoTexto = document.getElementById("resultadoTexto");
  resultadoTexto.innerHTML = `${mensagemr}`;
});


function cesar(codificr, texto, numerIncremento) {
  numerIncremento = Number(numerIncremento);

let mensagemr = "";

for (var i = 0; i < texto.length; i++) {
let letra = texto[i];
let codig = letra.charCodeAt();

if (codificr == "codificar") {
      codig += numerIncremento;
} else {
      codig-= numerIncremento;
    }
mensagemr += String.fromCharCode(codig);
  }
  return mensagemr;
}


function base64(codificr, texto) {
  if (codificr == "codificar") {
    return btoa(texto);
  } else {
    return atob(texto);
  }
}

let scrollTop = function() {
    window.scrollTo(0, 0);
  };