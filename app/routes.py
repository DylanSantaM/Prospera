from flask import Blueprint, render_template, flash, redirect, url_for, current_app
from flask_login import login_user, logout_user, login_required, current_user
from app import db  # Only import db here, not app itself
from app.models import User  # Import models after db is initialized
from app.forms import LoginForm, RegistrationForm

# Define the blueprint
main = Blueprint("main", __name__)

# Routes for the main blueprint
@main.route("/")
@main.route("/landing")
@main.route("/index")
def index():
    return render_template("index.html", title="Landing page")

@main.route("/logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    flash("You have been logged out.", "info")
    return redirect(url_for("main.index"))

@main.context_processor
def inject_user():
    return dict(current_user=current_user)

@main.route("/register", methods=["GET", "POST"])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash("Registration successful! Please log in.", "success")
        return redirect(url_for("main.login"))
    return render_template("register.html", form=form)

@main.route("/login", methods=["GET", "POST"]) 
def login(): 
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.verify_password(form.password.data):
            login_user(user)
            flash("Logged in successfully!", "success")
            return redirect(url_for("main.dashboard"))
        flash("Invalid email or password.", "danger")
    return render_template("login.html", form=form)

@main.route("/dashboard")
@login_required
def dashboard():
    return render_template("dashboard.html", title="Dashboard page")