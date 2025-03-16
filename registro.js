const limparCampo = (campo1, campo2) => {
    campo1.value = "";
    campo2.value = "";
}

function btRegistrarEnviar() {
    const nome = document.getElementById("nome")
    const senha = document.getElementById("senha")
    const senhaConfirma = document.getElementById("senhaConfirma")
    let senhaElement = senha

    //verifica se as senhas são iguais
    if (senhaConfirma.value === senha.value) {
        // Pega usuários existentes ou cria array vazio
        let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]")
        // Adiciona novo usuário
        usuarios.push({
            nome: nome.value,
            senha: senha.value,
        })
        // Salva array atualizado
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location.href = "login.html";
    } else {
        alert("As senhas não estão de acordo")
        // Limpa os campos de senha
        limparCampo(senha, senhaConfirma)
        senhaElement.focus()
    }
}
