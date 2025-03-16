import os

class Config:
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'instance', 'oficina.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'chave-secreta-do-projeto'

if __name__ == "__main__":
    os.system("python run.py")