from psycopg2.extras import RealDictCursor
from core.database import Database

class BayesianModel:
    def __init__(self):
        self.db = Database()

    def fetch_nodes(self):
        """Fetch all nodes from the database."""
        conn = self.db.get_connection()
        try:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute("SELECT id, label, states FROM bayesian_nodes;")
                nodes = cur.fetchall()
                return nodes
        finally:
            self.db.release_connection(conn)

    def fetch_edges(self):
        """Fetch all edges from the database."""
        conn = self.db.get_connection()
        try:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute("SELECT id, source, target FROM bayesian_edges;")
                edges = cur.fetchall()
                return edges
        finally:
            self.db.release_connection(conn)
