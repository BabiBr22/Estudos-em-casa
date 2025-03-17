function btLoginEnviar(){
    const nomeLogin = document.getElementById("nome");
    const senhaLogin = document.getElementById("senha");
    let mensagem = document.getElementById("mensagem");

    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    const usuarioEncontrado = usuarios.find(usuarios =>
        usuarios.nome === nomeLogin.value &&
        usuarios.senha === senhaLogin.value
    );

    if(usuarioEncontrado){
        alert("Login bem sucedido!");
        // Guarda na sessão que usuário está logado
        sessionStorage.setItem("usuarioLogado", "true");
        window.location.href ="home.html";
        
    }else{
        mensagem.innerHTML = `Você ainda não está registrado! <a class="linkMensagem" href="index.html">Registre-se</a>`;
    }
}





