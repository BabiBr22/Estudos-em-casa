from flask import Blueprint, render_template, request, redirect, url_for, flash
from app.models import Moto, Cliente
from app import db

motos = Blueprint('motos', __name__)

@motos.route('/motos')
def listar():
    motos = Moto.query.all()
    return render_template('motos/listar.html', motos=motos)

@motos.route('/motos/novo', methods=['GET', 'POST'])
def novo():
    if request.method == 'POST':
        moto = Moto(
            marca=request.form['marca'],
            modelo=request.form['modelo'],
            ano=request.form['ano'],
            placa=request.form['placa'],
            quilometragem=request.form['quilometragem'],
            cliente_id=request.form['cliente_id']
        )
        db.session.add(moto)
        db.session.commit()
        flash('Moto cadastrada com sucesso!')
        return redirect(url_for('motos.listar'))
    
    clientes = Cliente.query.all()
    return render_template('motos/novo.html', clientes=clientes)