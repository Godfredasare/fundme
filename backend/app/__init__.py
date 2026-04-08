from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from .config import Config

jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app, resources={r"/api/*": {"origins": Config.FRONTEND_URL}})
    jwt.init_app(app)

    from .routes.auth import auth_bp
    from .routes.profile import profile_bp
    from .routes.donations import donations_bp
    from .routes.coffee import coffee_bp
    from .routes.transactions import transactions_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(profile_bp, url_prefix="/api/profile")
    app.register_blueprint(donations_bp, url_prefix="/api/donations")
    app.register_blueprint(coffee_bp, url_prefix="/api/coffee")
    app.register_blueprint(transactions_bp, url_prefix="/api/transactions")

    return app