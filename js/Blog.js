const body = document.body;
const remove = document.querySelector(".navbar-close-icon");
function removeClasse(){
    body.removeAttribute("class","mobile-menu");
}
remove.addEventListener("click", removeClasse);

const add = document.querySelector(".navbar-burger-icon");
function addClasse(){
    body.setAttribute("class" , "mobile-menu");
}

add.addEventListener("click", addClasse);


function myFunction() {
      console.log("Tamanho da tela atingiu o limite desejado!");
  }

  // Função de verificação de tamanho da tela
  function checkWindowSize() {
    // Obtenha a largura atual da janela
    var windowWidth = window.innerWidth;

    // Defina o limite de largura desejado
    var limit = 1024; // Exemplo: 768 pixels

    // Verifique se a largura da janela atingiu o limite desejado
    if (windowWidth <= limit) {
      // Executa a função quando o limite é atingido
     removeClasse();
    }
  }

  // Adicione um ouvinte de evento resize à janela
  window.addEventListener('resize', checkWindowSize);

  // Chame a função de verificação de tamanho da tela ao carregar a página
  checkWindowSize();

