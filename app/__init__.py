from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from config import Config

db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()
login.login_view = "main.login" 

def create_app():
    app = Flask(__name__)

    # Load configuration from environment variables or a config file
    app.config.from_object(Config)
    app.config["SQLALCHEMY_ECHO"] = True
    app.config["SQLALCHEMY_RECORD_QUERIES"] = True

    db.init_app(app)
    migrate.init_app(app, db)
    login.init_app(app)

    from app.routes import main as main_blueprint 
    app.register_blueprint(main_blueprint)

    return app

from app import models
