#!/bin/bash

# 모킹 클래스 생성 경로 설정
MOCKS_DIR="src/tests/mocks"

# 디렉토리 생성
mkdir -p $MOCKS_DIR

# MockBayesianModel.py
cat <<EOL > $MOCKS_DIR/mock_bayesian_model.py
class MockBayesianModel:
    def get_network(self):
        return {"nodes": ["A", "B"], "edges": [("A", "B")]}
EOL

# MockDynamicModel.py
cat <<EOL > $MOCKS_DIR/mock_dynamic_model.py
class MockDynamicModel:
    def solve(self):
        return {"solution": "optimal_path"}
EOL

# MockInfluenceModel.py
cat <<EOL > $MOCKS_DIR/mock_influence_model.py
class MockInfluenceModel:
    def get_diagram(self):
        return {"nodes": ["Decision", "Chance"], "edges": [("Decision", "Chance")]}
EOL

# MockPOMDPModel.py
cat <<EOL > $MOCKS_DIR/mock_pomdp_model.py
class MockPOMDPModel:
    def solve(self):
        return {"solution": "belief_state_optimized"}
EOL

# MockReinforcementModel.py
cat <<EOL > $MOCKS_DIR/mock_reinforcement_model.py
class MockReinforcementModel:
    def get_status(self):
        return {"status": "training_complete", "accuracy": 0.95}
EOL

echo "모킹 클래스 생성 완료: $MOCKS_DIR"
