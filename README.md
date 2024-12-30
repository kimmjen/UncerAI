# UncerAI Project Plan

## 프로젝트 개요
UncerAI는 다양한 비즈니스 및 기술 분야에서 불확실성을 모델링하고 시뮬레이션할 수 있는 AI 기반 솔루션을 제공하는 시스템입니다. 이 프로젝트는 백엔드와 프론트엔드가 통합된 애플리케이션으로, 주요 기능으로는 Bayesian Network, Dynamic Programming, Influence Diagram, POMDP, Reinforcement Learning과 같은 의사결정 모델링을 지원합니다.

## 주요 기능
### 1. Bayesian Network
- **설명**: 확률적 관계를 시각화 및 분석하기 위한 Bayesian Network 제공.
- **기능**:
  - 노드와 에지 데이터 관리.
  - 네트워크 시각화.

### 2. Dynamic Programming
- **설명**: 최적화된 솔루션 경로와 비용 계산 지원.
- **기능**:
  - 최적 경로와 비용 제공.
  - 결과 시각화.

### 3. Influence Diagram
- **설명**: 의사결정 모델을 시각화하기 위한 Influence Diagram 지원.
- **기능**:
  - 노드와 에지 데이터 관리.
  - Diagram 분석 및 시각화.

### 4. POMDP
- **설명**: Partially Observable Markov Decision Process를 기반으로 의사결정 지원.
- **기능**:
  - 신념 상태와 최적 행동 제공.
  - 시뮬레이션 지원.

### 5. Reinforcement Learning
- **설명**: 강화 학습 상태 관리 및 정책 제공.
- **기능**:
  - 현재 에피소드, 총 보상, 정책 정보 제공.

## 백엔드
### 기술 스택
- **언어**: Python
- **프레임워크**: FastAPI
- **데이터베이스**: PostgreSQL (TimescaleDB 포함)
- **테스트**: pytest
- **라이브러리**: Pydantic, psycopg2

### 백엔드 구조
```plaintext
src/
├── api/
│   ├── v1/
│   │   ├── endpoints/
│   │   │   ├── bayesian.py
│   │   │   ├── dynamic.py
│   │   │   ├── influence.py
│   │   │   ├── pomdp.py
│   │   │   └── reinforcement.py
├── core/
│   ├── database.py
│   └── config.py
├── model/
│   ├── bayesian.py
│   ├── dynamic.py
│   ├── influence.py
│   ├── pomdp.py
│   └── reinforcement.py
├── schemas/
│   ├── bayesian.py
│   ├── dynamic.py
│   ├── influence.py
│   ├── pomdp.py
│   └── reinforcement.py
├── service/
│   ├── bayesian_service.py
│   ├── dynamic_service.py
│   ├── influence_service.py
│   ├── pomdp_service.py
│   └── reinforcement_service.py
└── main.py
```

### 주요 API
- **Bayesian Network**: `/api/v1/bayesian/`
- **Dynamic Programming**: `/api/v1/dynamic/`
- **Influence Diagram**: `/api/v1/influence/`
- **POMDP**: `/api/v1/pomdp/`
- **Reinforcement Learning**: `/api/v1/reinforcement/`

## 프론트엔드
### 기술 스택
- **언어**: JavaScript, TypeScript
- **프레임워크**: React
- **상태 관리**: Zustand
- **UI 라이브러리**: Tailwind CSS
- **라우팅**: React Router
- **API 통신**: Axios

### 프론트엔드 구조
```plaintext
src/
├── components/
│   ├── BayesianNetwork/
│   ├── DynamicProgramming/
│   ├── InfluenceDiagram/
│   ├── POMDP/
│   └── ReinforcementLearning/
├── pages/
│   ├── Home.jsx
│   ├── BayesianNetwork.jsx
│   ├── DynamicProgramming.jsx
│   ├── InfluenceDiagram.jsx
│   ├── POMDP.jsx
│   └── ReinforcementLearning.jsx
├── state/
│   └── store.js
├── styles/
│   └── tailwind.css
├── utils/
│   └── api.js
└── App.jsx
```

### 주요 화면
- **홈 화면**: 주요 기능 소개 및 네비게이션 제공.
- **Bayesian Network**: 네트워크 시각화.
- **Dynamic Programming**: 최적 경로와 비용 시각화.
- **Influence Diagram**: Diagram 데이터 표시.
- **POMDP**: 신념 상태 및 최적 행동 표시.
- **Reinforcement Learning**: 학습 상태 및 정책 데이터 표시.

### API 연동
- Axios를 통해 백엔드와 통신.
- 상태 관리를 위해 Zustand 사용.

### UI 및 사용자 경험
- Tailwind CSS로 반응형 디자인 구현.
- 시각화 라이브러리(예: D3.js, Chart.js) 사용 계획.

## 테스트
### 백엔드 테스트
- pytest로 유닛 테스트 및 통합 테스트.
- Mock 객체를 사용하여 독립적인 테스트 환경 구축.

### 프론트엔드 테스트
- Jest 및 React Testing Library로 컴포넌트 테스트.
- API 연동 테스트.

## 배포
### 배포 환경
- **백엔드**: Docker 컨테이너화하여 클라우드(AWS, GCP) 배포.
- **프론트엔드**: Vercel 또는 Netlify를 통해 배포.

### CI/CD
- GitHub Actions를 사용한 자동화된 테스트 및 배포 파이프라인 구성.

## 작업 현황
- **백엔드**:
  - 주요 API 개발 완료 (Bayesian, Dynamic, Influence, POMDP, Reinforcement).
  - 테스트 데이터베이스 초기화 및 검증 완료.
- **프론트엔드**:
  - UI 컴포넌트 설계 진행 중.
  - 상태 관리 및 API 통신 로직 준비 중.
- **테스트**:
  - 테스트 코드 작성 및 실행 완료 (일부 추가 작업 필요).

## 향후 계획
1. 프론트엔드 UI 및 시각화 기능 완성.
2. 백엔드 최적화 및 부하 테스트 수행.
3. CI/CD 파이프라인 설정 및 자동 배포.
4. 사용자 피드백을 기반으로 기능 개선.

---

위 내용으로 기획서를 완성했습니다. 추가하거나 수정해야 할 내용이 있다면 말씀해주세요!

