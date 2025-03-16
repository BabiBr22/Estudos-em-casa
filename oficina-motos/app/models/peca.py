from app import db
from datetime import datetime

class Peca(db.Model):
    __tablename__ = 'pecas'
    
    id = db.Column(db.Integer, primary_key=True)
    codigo = db.Column(db.String(50), unique=True, nullable=False)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.Text)
    marca = db.Column(db.String(50))
    modelo_compativel = db.Column(db.String(200))
    localizacao = db.Column(db.String(50))
    quantidade = db.Column(db.Integer, default=0)
    quantidade_minima = db.Column(db.Integer, default=5)
    preco_custo = db.Column(db.Float)
    preco_venda = db.Column(db.Float)
    data_cadastro = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f'<Peca {self.codigo} - {self.nome}>'