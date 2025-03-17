// Este código só executa depois que TUDO carregar na página
window.onload = function () {
    // Verifica se está logado
    const estaLogado = sessionStorage.getItem("usuarioLogado");

    if (!estaLogado) {
        alert("Faça login primeiro!");
        window.location.href = "login.html";
    }
}

function fazerLogout() {
    // Limpa apenas a sessão 
    sessionStorage.clear();// Limpa dados temporários
    window.location.href = "login.html";
}


