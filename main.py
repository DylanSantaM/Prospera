from app import create_app
from app.models import User
from app import db

# Initialize the app
app = create_app()

@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User=User)

if __name__ == "__main__":
    app.run(debug=True)
