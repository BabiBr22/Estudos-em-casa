const sqlite3 = require('sqlite3').verbose();
//o que é essa .verbose?

// Cria ou abre o banco de dados
const db = new sqlite3.Database('../mensagens.db', (err) =>{
    if(err){
        console.error('Erro ao conectar ao banco de dados', err.mensage);
    }else{
        console.log('Conectado ao banco de dados SQLite');
    }
});

// Cria a tabela de mensagens, se não existir
db.serialize(()=>{
    db.run(`
        CREATE TABLE IF NOT EXISTS mensagens(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        texto TEXT NOT NULL,
        data_hora TEXT NOT NULL
        )`
    );
});

module.exports = db;