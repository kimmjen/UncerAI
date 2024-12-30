import os
from dotenv import load_dotenv
from pathlib import Path

# .env 파일 로드
env_path = Path(__file__).resolve().parent.parent.parent / ".env"
load_dotenv(dotenv_path=env_path)

class Settings:
    APP_NAME: str = os.getenv("APP_NAME", "UncerAI")
    API_V1_STR: str = os.getenv("API_V1_STR", "/api")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "default_secret_key")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60))

    # PostgreSQL 설정
    DB_HOST: str = os.getenv("DB_HOST", "localhost")
    DB_NAME: str = os.getenv("DB_NAME", "database")
    DB_USER: str = os.getenv("DB_USER", "user")
    DB_PASSWORD: str = os.getenv("DB_PASSWORD", "password")

    # TimescaleDB 설정
    TIMESCALE_DB_HOST: str = os.getenv("TIMESCALE_DB_HOST", "localhost")
    TIMESCALE_DB_NAME: str = os.getenv("TIMESCALE_DB_NAME", "timescale")
    TIMESCALE_DB_USER: str = os.getenv("TIMESCALE_DB_USER", "user")
    TIMESCALE_DB_PASSWORD: str = os.getenv("TIMESCALE_DB_PASSWORD", "password")
    TIMESCALE_DB_PORT: int = int(os.getenv("TIMESCALE_DB_PORT", 5432))

settings = Settings()
