from psycopg2.extras import RealDictCursor
from psycopg2 import DatabaseError
from src.core.database import Database


class POMDPModel:
    def __init__(self):
        self.db = Database()

    def fetch_solution(self):
        """
        Fetch the POMDP solution from the database.
        Returns the belief state and the optimal action.
        """
        conn = self.db.get_connection()
        try:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute("SELECT belief_state, optimal_action FROM pomdp_solutions LIMIT 1;")
                result = cur.fetchone()
                if result is None:
                    return {
                        "belief_state": {"state_probabilities": {}},
                        "optimal_action": ""
                    }

                # Parse JSONB field for belief state
                belief_state = result["belief_state"]
                if not isinstance(belief_state, dict):
                    belief_state = {}

                return {
                    "belief_state": {
                        "state_probabilities": belief_state
                    },
                    "optimal_action": result["optimal_action"]
                }
        except DatabaseError as e:
            print(f"Database error occurred: {str(e)}")
            return {
                "belief_state": {"state_probabilities": {}},
                "optimal_action": ""
            }
        finally:
            self.db.release_connection(conn)
