function enviarMensagem() {
    let textarea = document.getElementById("exibirMensagem");
    let mensagem = textarea.value;

    // Cria uma nova tag <p>
    let paragrafo = document.createElement("p");
    paragrafo.textContent = mensagem; // Define o texto do parágrafo

    // Adiciona uma classe ao <p>
    paragrafo.classList.add("mensagem-p")

    // Substitui o textarea pelo parágrafo
    textarea.parentNode.replaceChild(paragrafo, textarea);
    /*O método parentNode retorna o elemento pai do <textarea>.
    No seu caso, o pai do <textarea> é o <div> que o contém.
    O método replaceChild é usado para substituir um nó filho existente (neste caso,
    o <textarea>) por um novo nó (neste caso, o <p>).
    O parentNode é usado para acessar o elemento pai de um nó no DOM. No contexto do
    seu código, ele é essencial porque o método replaceChild precisa ser
    chamado no elemento pai do nó que será substituído
    */

    console.log('Mensagem enviada para o backend:', mensagem); // Log para depuração

     // Envia a mensagem para o backend
     fetch('http://localhost:3000/mensagens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texto: mensagem }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Mensagem salva no banco de dados:', data);
    })
    .catch(error => {
        console.error('Erro ao salvar a mensagem:', error);
    });
}