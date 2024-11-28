from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, BooleanField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Length, EqualTo, ValidationError, Email, EqualTo
from app.models import User

class LoginForm(FlaskForm):
    """Login Form"""
    email = StringField('Email', validators=[DataRequired(), Length(1, 64)])
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Keep me logged in')
    submit = SubmitField('Login')


class RegistrationForm(FlaskForm):
    """Registration Form"""
    username = StringField('Username', validators=[DataRequired(), Length(1, 16)])
    email = StringField('Email', validators=[DataRequired(), Length(1, 64)])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Retype Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Login')

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user is not None:
            raise ValidationError('Please use a different username.')

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError('Please use a different email address.')
