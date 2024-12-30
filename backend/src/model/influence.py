from psycopg2.extras import RealDictCursor
from psycopg2 import DatabaseError
from src.core.database import Database


class InfluenceModel:
    def __init__(self):
        self.db = Database()

    def fetch_nodes(self):
        """Fetch Influence Diagram nodes."""
        conn = self.db.get_connection()
        try:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute("SELECT id, label, type FROM influence_nodes;")
                return cur.fetchall()
        except DatabaseError as e:
            print(f"Database error occurred: {str(e)}")
            return []
        finally:
            self.db.release_connection(conn)

    def fetch_edges(self):
        """Fetch Influence Diagram edges."""
        conn = self.db.get_connection()
        try:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute("SELECT id, source, target, label FROM influence_edges;")
                return cur.fetchall()
        except DatabaseError as e:
            print(f"Database error occurred: {str(e)}")
            return []
        finally:
            self.db.release_connection(conn)
