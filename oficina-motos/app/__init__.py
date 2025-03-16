from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
import os

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    os.makedirs('instance', exist_ok=True)
    
    db.init_app(app)
    
    # Import models
    from app.models import Cliente, Moto, Funcionario, Peca
    
    # Register blueprints
    from app.routes.main import main
    from app.routes.clientes import clientes
    from app.routes.motos import motos
    from app.routes.pecas import pecas
    
    app.register_blueprint(main)
    app.register_blueprint(clientes)
    app.register_blueprint(motos)
    app.register_blueprint(pecas)
    
    with app.app_context():
        db.create_all()
    
    return app

