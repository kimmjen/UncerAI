from psycopg2.extras import RealDictCursor
from psycopg2 import DatabaseError
from src.core.database import Database


class DynamicModel:
    def __init__(self):
        self.db = Database()

    def fetch_solutions(self):
        """Fetch solutions for Dynamic Programming."""
        conn = self.db.get_connection()
        try:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute("SELECT optimal_path, cost FROM dynamic_solutions;")
                result = cur.fetchone()
                if result is None:
                    return {"optimal_path": [], "cost": 0.0}

                # Optional: Parse optimal_path if it's stored as a string
                if isinstance(result["optimal_path"], str):
                    result["optimal_path"] = [int(x) for x in result["optimal_path"].split(",")]

                return result
        except DatabaseError as e:
            print(f"Database error occurred: {str(e)}")
            return {"optimal_path": [], "cost": 0.0}
        finally:
            self.db.release_connection(conn)
