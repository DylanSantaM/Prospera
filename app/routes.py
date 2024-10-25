from app import app
from flask import render_template

@app.route('/')
@app.route('/landing')
@app.route('/index')
def index():
    return render_template('index.html', title='Index page')


@app.route('/register')
def register():
    return render_template('register.html', title='Register page')

@app.route('/login')
def login():
    return render_template('login.html', title='Login page')