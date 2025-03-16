function btLoginEnviar(){
    const nomeLogin = document.getElementById("nome");
    const senhaLogin = document.getElementById("senha");

    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    const usuarioEncontrado = usuarios.find(usuarios =>
        usuarios.nome === nomeLogin.value &&
        usuarios.senha === senhaLogin.value
    );

    if(usuarioEncontrado){
        alert("Login bem sucedido!");
        window.location.href ="home.html";
        
    }else{
        alert("Você ainda não está registrado!")
    }
}





