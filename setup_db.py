from app import create_app, db

# Create the app instance
app = create_app()

# Initialize the app context and set up the database
with app.app_context():
    db.create_all()  # Create tables
    print("Database setup complete.")
