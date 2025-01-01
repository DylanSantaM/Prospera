from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()
login.login_view = "main.login" 

def create_app():
    app = Flask(__name__)

    # Load configuration from environment variables or a config file
    app.config.from_object("config") 

    # Set the database URI (example for SQLite)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db' 

    db.init_app(app)
    migrate.init_app(app, db)
    login.init_app(app)

    from app.routes import main as main_blueprint 
    app.register_blueprint(main_blueprint)

    return app