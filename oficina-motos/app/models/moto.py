from app import db

class Moto(db.Model):
    __tablename__ = 'motos'
    
    id = db.Column(db.Integer, primary_key=True)
    marca = db.Column(db.String(50), nullable=False)
    modelo = db.Column(db.String(50), nullable=False)
    ano = db.Column(db.Integer)
    placa = db.Column(db.String(8), unique=True, nullable=False)
    quilometragem = db.Column(db.Integer)
    cliente_id = db.Column(db.Integer, db.ForeignKey('clientes.id'), nullable=False)
    
    # Relacionamentos
    servicos = db.relationship('Servico', backref='moto', lazy=True)

    def __repr__(self):
        return f'<Moto {self.marca} {self.modelo} - Placa: {self.placa}>'