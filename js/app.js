
// modo dia/noite
function alternarModo() {
  var corpo = document.body;
  var botao = document.getElementById("btn-modo");

  if (corpo.classList.contains("noite")) {
    corpo.classList.remove("noite");
    // Atualiza o texto do botão consoante a língua activa
    if (linguaAtual === "pt") {
      botao.textContent = "Noite";
    } else {
      botao.textContent = "Night";
    }
  } else {
    corpo.classList.add("noite");
    if (linguaAtual === "pt") {
      botao.textContent = "Dia";
    } else {
      botao.textContent = "Day";
    }
  }
}

// (Português / Inglês) 
var linguaAtual = "pt"; // língua inicial

function alternarLingua() {
  var botaoLingua = document.getElementById("btn-lingua");
  var modoNoite = document.body.classList.contains("noite");

  if (linguaAtual === "pt") {
    linguaAtual = "en";
    botaoLingua.textContent = "PT";
  } else {
    linguaAtual = "pt";
    botaoLingua.textContent = "EN";
  }

  // Atualiza todos os elementos que têm data-pt e data-en
  var elementos = document.querySelectorAll("[data-pt]");
  for (var i = 0; i < elementos.length; i++) {
    if (linguaAtual === "pt") {
      elementos[i].textContent = elementos[i].getAttribute("data-pt");
    } else {
      elementos[i].textContent = elementos[i].getAttribute("data-en");
    }
  }

  // Atualiza o botão de modo dia/noite
  var botaoModo = document.getElementById("btn-modo");
  if (botaoModo) {
    if (modoNoite) {
      botaoModo.textContent = linguaAtual === "pt" ? "Dia" : "Day";
    } else {
      botaoModo.textContent = linguaAtual === "pt" ? "Noite" : "Night";
    }
  }
}

//mostra versão aumentada da imagem;
function abrirModal(srcImagem) {
  var modal = document.getElementById("modal-imagem");
  var imgModal = document.getElementById("img-modal");

  imgModal.src = srcImagem;
  modal.classList.add("aberto");
}

function fecharModal() {
  var modal = document.getElementById("modal-imagem");
  modal.classList.remove("aberto");
}

// Fecha clicar no fundo 
window.addEventListener("load", function () {
  var modal = document.getElementById("modal-imagem");
  if (modal) {
    modal.addEventListener("click", function (evento) {
      // Só fecha se o clique for no fundo, não na imagem ou no botão
      if (evento.target === modal) {
        fecharModal();
      }
    });
  }
});

// Validação do formulário de contacto
function validarFormulario() {
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var mensagem = document.getElementById("mensagem");
  var aviso = document.getElementById("aviso-form");

  if (!nome || !email || !mensagem) return;

  // Verifica se os campos estão preenchidos
  if (nome.value.trim() === "") {
    aviso.textContent = linguaAtual === "pt"
      ? "Por favor, insira o seu nome."
      : "Please enter your name.";
    aviso.style.color = "#c0392b";
    return;
  }

  // Validação do e-mail: tem que conter @ e um ponto depois
  var emailValor = email.value.trim();
  var posicaoArroba = emailValor.indexOf("@");
  var posicaoPonto = emailValor.lastIndexOf(".");
  if (posicaoArroba < 1 || posicaoPonto < posicaoArroba + 2) {
    aviso.textContent = linguaAtual === "pt"
      ? "Por favor, insira um e-mail válido."
      : "Please enter a valid e-mail.";
    aviso.style.color = "#c0392b";
    return;
  }

  if (mensagem.value.trim() === "") {
    aviso.textContent = linguaAtual === "pt"
      ? "Por favor, escreva a sua mensagem."
      : "Please write your message.";
    aviso.style.color = "#c0392b";
    return;
  }

  // Tudo correto
  aviso.textContent = linguaAtual === "pt"
    ? "✔ Mensagem enviada com sucesso! Entraremos em contacto brevemente."
    : "✔ Message sent successfully! We will contact you shortly.";
  aviso.style.color = "#27ae60";

  // Limpa os campos
  nome.value = "";
  email.value = "";
  mensagem.value = "";
}
