from app import db
from datetime import datetime

class Funcionario(db.Model):
    __tablename__ = 'funcionarios'
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    cpf = db.Column(db.String(11), unique=True, nullable=False)
    funcao = db.Column(db.String(50), nullable=False)
    data_admissao = db.Column(db.DateTime, default=datetime.utcnow)
    telefone = db.Column(db.String(15))
    email = db.Column(db.String(120))
    comissao = db.Column(db.Float, default=0.0)
    ativo = db.Column(db.Boolean, default=True)
    
    # Relacionamento com serviços
    servicos_realizados = db.relationship('Servico', backref='mecanico', lazy=True)

    def __repr__(self):
        return f'<Funcionario {self.nome}>'