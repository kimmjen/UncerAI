from psycopg2.extras import RealDictCursor
from psycopg2 import DatabaseError
from src.core.database import Database


class ReinforcementModel:
    def __init__(self):
        self.db = Database()

    def fetch_status(self):
        """Fetch Reinforcement Learning status."""
        conn = self.db.get_connection()
        try:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute("SELECT current_episode, total_reward, policy FROM reinforcement_status LIMIT 1;")
                result = cur.fetchone()
                if result is None:
                    # 디버깅용 출력
                    print("No data in reinforcement_status table, returning default values.")
                    return {"current_episode": 0, "total_reward": 0.0, "policy": {}}

                # Optional: JSON 필드 확인
                if isinstance(result.get("policy"), str):
                    import json
                    try:
                        result["policy"] = json.loads(result["policy"])
                    except json.JSONDecodeError:
                        print("Failed to decode policy field as JSON. Returning default empty dict.")
                        result["policy"] = {}

                return result
        except DatabaseError as e:
            print(f"Database error occurred: {str(e)}")
            return {"current_episode": 0, "total_reward": 0.0, "policy": {}}
        finally:
            self.db.release_connection(conn)
