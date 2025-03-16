from app import db
from datetime import datetime

class Servico(db.Model):
    __tablename__ = 'servicos'
    
    id = db.Column(db.Integer, primary_key=True)
    descricao = db.Column(db.String(200), nullable=False)
    data_entrada = db.Column(db.DateTime, default=datetime.utcnow)
    data_previsao = db.Column(db.DateTime)
    status = db.Column(db.String(50), default='Aberto')
    
    # Foreign Keys
    moto_id = db.Column(db.Integer, db.ForeignKey('motos.id'), nullable=False)
    mecanico_id = db.Column(db.Integer, db.ForeignKey('funcionarios.id'))
    
    def __repr__(self):
        return f'<Servico {self.id} - {self.descricao}>'