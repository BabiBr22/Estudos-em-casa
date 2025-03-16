from app import db
from datetime import datetime

class Cliente(db.Model):
    __tablename__ = 'clientes'
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    cpf_cnpj = db.Column(db.String(14), unique=True, nullable=False)
    telefone = db.Column(db.String(15))
    whatsapp = db.Column(db.String(15))
    endereco = db.Column(db.String(200))
    email = db.Column(db.String(120), unique=True)
    data_cadastro = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relacionamento com motos
    motos = db.relationship('Moto', backref='proprietario', lazy=True)

    def __repr__(self):
        return f'<Cliente {self.nome}>'