from flask import Blueprint, render_template, request, redirect, url_for, flash
from app.models import Cliente
from app import db

clientes = Blueprint('clientes', __name__)

@clientes.route('/clientes')
def listar():
    clientes = Cliente.query.all()
    return render_template('clientes/listar.html', clientes=clientes)

@clientes.route('/clientes/novo', methods=['GET', 'POST'])
def novo():
    if request.method == 'POST':
        cliente = Cliente(
            nome=request.form['nome'],
            cpf_cnpj=request.form['cpf_cnpj'],
            telefone=request.form['telefone'],
            email=request.form['email']
        )
        db.session.add(cliente)
        db.session.commit()
        flash('Cliente cadastrado com sucesso!')
        return redirect(url_for('clientes.listar'))
    return render_template('clientes/novo.html')