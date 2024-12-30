# Backend Project Plan

## 프로젝트 개요
### 프로젝트 이름
UncerAI Backend System

### 목표
인공지능 기반의 의사결정 지원 시스템 개발을 위한 백엔드 서비스 구축.

### 주요 기능
- 베이지안 네트워크, 동적 프로그래밍, 인플루언스 다이어그램, POMDP, 강화 학습 모델 관리 및 API 제공.
- 데이터베이스와 통합하여 지속적인 데이터 저장 및 분석 지원.
- FastAPI를 활용한 RESTful API 제공.

---

## 프로젝트 구조
### 디렉토리 구조
```plaintext
src/
├── api/
│   ├── v1/
│   │   ├── endpoints/
│   │   │   ├── __init__.py
│   │   │   ├── bayesian.py
│   │   │   ├── dynamic.py
│   │   │   ├── influence.py
│   │   │   ├── pomdp.py
│   │   │   └── reinforcement.py
├── core/
│   ├── __init__.py
│   ├── config.py
│   └── database.py
├── model/
│   ├── __init__.py
│   ├── bayesian.py
│   ├── dynamic.py
│   ├── influence.py
│   ├── pomdp.py
│   └── reinforcement.py
├── schemas/
│   ├── __init__.py
│   ├── bayesian.py
│   ├── dynamic.py
│   ├── influence.py
│   ├── pomdp.py
│   └── reinforcement.py
├── service/
│   ├── __init__.py
│   ├── bayesian_service.py
│   ├── dynamic_service.py
│   ├── influence_service.py
│   ├── pomdp_service.py
│   └── reinforcement_service.py
└── tests/
    ├── test_api/
    │   ├── __init__.py
    │   ├── test_bayesian.py
    │   ├── test_dynamic.py
    │   ├── test_influence.py
    │   ├── test_pomdp.py
    │   └── test_reinforcement.py
    ├── test_service/
    │   ├── __init__.py
    │   ├── test_bayesian_service.py
    │   ├── test_dynamic_service.py
    │   ├── test_influence_service.py
    │   ├── test_pomdp_service.py
    │   └── test_reinforcement_service.py
    └── mocks/
        ├── mock_bayesian_model.py
        ├── mock_dynamic_model.py
        ├── mock_influence_model.py
        ├── mock_pomdp_model.py
        └── mock_reinforcement_model.py
```

---

## 주요 기능별 설계

### 1. Bayesian Network
#### Model
- BayesianModel: 데이터베이스에서 노드와 엣지를 조회하여 네트워크 정보를 반환.

#### Service
- BayesianService: BayesianModel에서 데이터를 조회하고 API에 맞게 가공.

#### API Endpoint
- GET `/api/v1/bayesian/`: Bayesian 네트워크 데이터를 반환.

#### 테스트
- Mock 데이터를 활용한 테스트 작성.
- Unit Test 및 API Test 포함.

---

### 2. Dynamic Programming
#### Model
- DynamicModel: 최적 경로와 비용 데이터를 데이터베이스에서 조회.

#### Service
- DynamicService: DynamicModel 데이터를 가공하여 API 응답 형태로 변환.

#### API Endpoint
- GET `/api/v1/dynamic/`: 동적 프로그래밍 솔루션 데이터를 반환.

#### 테스트
- Mock 데이터를 활용하여 서비스 및 API 테스트.

---

### 3. Influence Diagram
#### Model
- InfluenceModel: 노드와 엣지 데이터를 데이터베이스에서 조회.

#### Service
- InfluenceService: InfluenceModel 데이터를 처리하여 API 응답 형태로 변환.

#### API Endpoint
- GET `/api/v1/influence/`: Influence 다이어그램 데이터를 반환.

#### 테스트
- Mock 데이터 및 실제 데이터베이스와 통합 테스트 진행.

---

### 4. POMDP
#### Model
- POMDPModel: Belief State와 최적 Action 데이터를 데이터베이스에서 조회.

#### Service
- POMDPService: POMDPModel 데이터를 가공하여 API 응답 형태로 변환.

#### API Endpoint
- GET `/api/v1/pomdp/`: POMDP 솔루션 데이터를 반환.

#### 테스트
- Mock 데이터를 활용한 유닛 테스트 및 통합 테스트.

---

### 5. Reinforcement Learning
#### Model
- ReinforcementModel: 현재 에피소드, 총 보상, 정책 데이터를 데이터베이스에서 조회.

#### Service
- ReinforcementService: ReinforcementModel 데이터를 가공하여 API 응답 형태로 변환.

#### API Endpoint
- GET `/api/v1/reinforcement/`: 강화 학습 상태 데이터를 반환.

#### 테스트
- Mock 데이터를 활용하여 Reinforcement 학습 테스트 작성.

---

## 데이터베이스 설계

### 주요 테이블
#### Bayesian
```sql
CREATE TABLE bayesian_nodes (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255),
    states JSONB
);

CREATE TABLE bayesian_edges (
    id SERIAL PRIMARY KEY,
    source INT REFERENCES bayesian_nodes(id),
    target INT REFERENCES bayesian_nodes(id)
);
```

#### Dynamic Programming
```sql
CREATE TABLE dynamic_solutions (
    id SERIAL PRIMARY KEY,
    optimal_path JSONB,
    cost FLOAT
);
```

#### Influence Diagram
```sql
CREATE TABLE influence_nodes (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255),
    type VARCHAR(50)
);

CREATE TABLE influence_edges (
    id SERIAL PRIMARY KEY,
    source INT REFERENCES influence_nodes(id),
    target INT REFERENCES influence_nodes(id),
    label VARCHAR(255)
);
```

#### POMDP
```sql
CREATE TABLE pomdp_solutions (
    id SERIAL PRIMARY KEY,
    belief_state JSONB,
    optimal_action VARCHAR(255)
);
```

#### Reinforcement Learning
```sql
CREATE TABLE reinforcement_status (
    id SERIAL PRIMARY KEY,
    current_episode INT,
    total_reward FLOAT,
    policy JSONB
);
```

---

## 테스트 설계
### 테스트 프레임워크
- pytest 사용.
- API 테스트: FastAPI의 TestClient 사용.
- Mock 데이터: 각 모델에 대해 Mock 클래스를 작성.

### 테스트 종류
1. Unit Test
   - 모델 및 서비스 단위 테스트.
2. Integration Test
   - 데이터베이스와의 통합 테스트.
3. API Test
   - 엔드포인트별 응답 검증.

---

## 개발 환경
### 기술 스택
- Python 3.11
- FastAPI
- PostgreSQL
- Psycopg2

### 개발 도구
- PyCharm
- Docker
- Git & GitHub

---

## 작업 현황
### 완료된 작업
- Bayesian, Dynamic, Influence, POMDP, Reinforcement 모듈 설계 및 구현.
- 데이터베이스 설계 및 초기 데이터 작성.
- 기본 API 엔드포인트 작성 및 테스트 완료.

### 진행 중 작업
- 추가적인 테스트 케이스 작성.
- API 성능 최적화.

---

## 향후 계획
1. CI/CD 파이프라인 구성.
2. Swagger 문서화.
3. 사용자 인증 및 권한 관리 추가.
4. 확장 가능한 데이터 모델 설계.

