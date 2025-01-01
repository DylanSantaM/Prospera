from werkzeug.security import generate_password_hash, check_password_hash
from app import db
from flask_login import UserMixin
from app import db, login
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))  # Store hashed password

    def set_password(self, password):
        """Hashes and sets the user's password."""
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        """Verifies the provided password against the stored hash."""
        return check_password_hash(self.password_hash, password)