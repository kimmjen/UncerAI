from model.dynamic import DynamicModel

class DynamicService:
    def __init__(self, model=None):
        # 기본 모델을 전달하지 않으면 DynamicModel을 사용
        self.model = model or DynamicModel()

    def get_solution(self):
        """Fetch and validate the dynamic solution."""
        result = self.model.fetch_solutions()

        # 반환 값이 response_model에 맞는지 확인
        if "optimal_path" not in result or "cost" not in result:
            raise ValueError("Invalid result format from the model.")

        return {
            "optimal_path": result["optimal_path"],
            "cost": result["cost"],
        }
