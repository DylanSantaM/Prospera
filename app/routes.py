from app import app, db
from app.models import User
from flask_login import login_user, logout_user
from flask import render_template, flash, redirect, url_for
from app.forms import LoginForm, RegistrationForm

@app.route('/')
@app.route('/landing')
@app.route('/index')
def index():
    return render_template('index.html', title='Landing page')

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        # Logic to handle registration
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Registration successful! Please log in.', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # Handle login logic
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.verify_password(form.password.data):
            flash('Logged in successfully!', 'success')
            return redirect(url_for('dashboard'))  # Adjust this as needed
        else:
            flash('Invalid email or password.', 'danger')
    return render_template('login.html', form=form)


@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', title='Dashboard page')