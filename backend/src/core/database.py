import psycopg2
from psycopg2.pool import SimpleConnectionPool
from core.config import settings

class Database:
    _instance = None

    def __init__(self):
        if not Database._instance:
            Database._instance = SimpleConnectionPool(
                1, 10,
                host=settings.DB_HOST,
                database=settings.DB_NAME,
                user=settings.DB_USER,
                password=settings.DB_PASSWORD,
                port=5432
            )

    @staticmethod
    def get_connection():
        return Database._instance.getconn()

    @staticmethod
    def release_connection(conn):
        Database._instance.putconn(conn)
