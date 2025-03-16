from flask import Blueprint, render_template, request, redirect, url_for, flash
from app.models import Peca
from app import db

pecas = Blueprint('pecas', __name__)

@pecas.route('/pecas')
def listar():
    pecas = Peca.query.all()
    return render_template('pecas/listar.html', pecas=pecas)

@pecas.route('/pecas/novo', methods=['GET', 'POST'])
def novo():
    if request.method == 'POST':
        peca = Peca(
            codigo=request.form['codigo'],
            nome=request.form['nome'],
            descricao=request.form['descricao'],
            marca=request.form['marca'],
            modelo_compativel=request.form['modelo_compativel'],
            localizacao=request.form['localizacao'],
            quantidade=request.form['quantidade'],
            quantidade_minima=request.form['quantidade_minima'],
            preco_custo=request.form['preco_custo'],
            preco_venda=request.form['preco_venda']
        )
        db.session.add(peca)
        db.session.commit()
        flash('Peça cadastrada com sucesso!')
        return redirect(url_for('pecas.listar'))
    return render_template('pecas/novo.html')