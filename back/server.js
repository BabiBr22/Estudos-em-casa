const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Importa o módulo path para lidar com caminhos de arquivos
const db = require('./db/database');

const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Servir arquivos estáticos (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, '../front')));

// Rota para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html')); // Caminho ajustado para a raiz do projeto
});

// Rota para salvar uma mensagem no banco de dados
app.post('/mensagens', (req, res) => {
    const { texto } = req.body;
    const dataHora = new Date().toISOString();

    console.log('Recebido do frontend:', texto); // Log para verificar o texto recebido

    if (!texto) {
        console.error('Texto da mensagem é obrigatório.');
        return res.status(400).json({ error: 'Texto da mensagem é obrigatório.' });
    }

    const query = `INSERT INTO mensagens (texto, data_hora) VALUES (?, ?)`;
    db.run(query, [texto, dataHora], function (err) {
        if (err) {
            console.error('Erro ao salvar a mensagem no banco de dados:', err.message);
            return res.status(500).json({ error: 'Erro ao salvar a mensagem.' });
        }
        console.log('Mensagem salva com sucesso:', { id: this.lastID, texto, dataHora });
        res.status(201).json({ id: this.lastID, texto, dataHora });
    });
});

// Rota para obter todas as mensagens em formato JSON
app.get('/mensagens', (req, res) => {
    const query = `SELECT * FROM mensagens`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar mensagens.' });
        }
        res.json(rows);
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});