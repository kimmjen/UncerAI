### **UncerAI Frontend 기획서**

---

### **1. 프로젝트 개요**
**UncerAI**는 불확실한 상황에서 의사결정을 지원하기 위해 여러 인공지능 알고리즘 및 시각화 도구를 제공하는 웹 애플리케이션입니다. 프론트엔드는 **React**, **TypeScript**, **Tailwind CSS**를 기반으로 구현되었으며, 사용자 경험(UX)을 극대화하는 직관적인 UI를 제공합니다.

---

### **2. 기술 스택**
- **프레임워크**: React.js (Vite로 설정)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **라우팅**: React Router
- **API 통신**: Axios
- **상태 관리**: 기본 React 상태 관리 (추후 확장 가능)

---

### **3. 주요 기능**
#### **3.1. 대시보드**
- 다양한 알고리즘(예: Bayesian, Dynamic, Reinforcement, POMDP)을 선택할 수 있는 **중앙 허브 역할**.
- 각 알고리즘에 대한 간략한 설명을 제공.
- **링크를 통해 각 알고리즘 페이지로 이동**.

#### **3.2. 알고리즘 페이지**
1. **Bayesian Page**
    - 베이지안 네트워크의 노드와 엣지 데이터 시각화.
    - API 호출을 통해 데이터를 가져오며 로딩 상태 및 에러 핸들링 포함.

2. **Dynamic Page**
    - 동적 프로그래밍 솔루션(Optimal Path와 Cost)을 시각적으로 표시.
    - **로딩**, **에러 처리**, **API 데이터 연결**.

3. **Reinforcement Page**
    - 강화 학습 상태를 표시:
        - 현재 학습 중인 Episode.
        - Total Reward.
        - Policy 데이터(JSON 포맷).
    - **로딩**, **에러 처리**, **API 데이터 연결**.

4. **POMDP Page**
    - Partially Observable Markov Decision Process 결과 표시:
        - Belief State(신뢰 상태) 목록.
        - Optimal Action.
    - **로딩**, **에러 처리**, **API 데이터 연결**.

5. **Influence Page**
    - Influence Diagram 노드 및 엣지 데이터를 표시.
    - 베이지안 페이지와 유사한 방식으로 구성.

---

### **4. 화면 설계**
#### **4.1. 레이아웃 구성**
- **Header**
    - 제목: `UncerAI Dashboard`.
    - 상단 내비게이션으로 추후 확장 가능.

- **Sidebar**
    - 알고리즘 메뉴:
        - Dashboard
        - Bayesian
        - Dynamic
        - Reinforcement
        - POMDP
    - **모든 페이지에서 공통적으로 표시**.

- **Content**
    - 각 알고리즘별 데이터와 시각화를 표시하는 공간.

---

### **5. 폴더 구조**
```plaintext
src/
├── api/                          # API 관련 파일
│   ├── apiClient.ts              # Axios 클라이언트 설정
│   ├── services/                 # 서비스 파일 (API 통신)
│   │   ├── bayesianService.ts    # Bayesian 관련 API
│   │   ├── dynamicService.ts     # Dynamic 관련 API
│   │   ├── pomdpService.ts       # POMDP 관련 API
│   │   ├── reinforcementService.ts # Reinforcement 관련 API
│   │   └── influenceService.ts   # Influence 관련 API
├── assets/                       # 이미지, 아이콘 등 정적 파일
├── components/                   # 재사용 가능한 UI 컴포넌트
│   ├── Header.tsx                # 상단 헤더
│   ├── Sidebar.tsx               # 사이드바
│   ├── Layout.tsx                # 레이아웃 컴포넌트
│   └── LoadingAndError.tsx       # 로딩 및 에러 처리 공통 컴포넌트
├── pages/                        # 주요 페이지
│   ├── Dashboard.tsx             # 대시보드 페이지
│   ├── BayesianPage.tsx          # Bayesian 네트워크 페이지
│   ├── DynamicPage.tsx           # Dynamic 프로그래밍 페이지
│   ├── ReinforcementPage.tsx     # Reinforcement 학습 페이지
│   ├── PomdpPage.tsx             # POMDP 페이지
│   └── InfluencePage.tsx         # Influence 다이어그램 페이지
├── styles/                       # TailwindCSS 관련 스타일 파일
│   └── index.css                 # TailwindCSS 메인 설정
├── App.tsx                       # 라우팅 설정 및 메인 컴포넌트
├── main.tsx                      # ReactDOM 렌더링
└── vite.config.ts                # Vite 설정
```

---

### **6. API 통신 흐름**
1. **Axios Client 설정** (`api/apiClient.ts`):
    - 기본 URL 및 공통 헤더 설정.
2. **서비스 파일**:
    - API 호출 로직 캡슐화 (e.g., `getBayesianData`, `getDynamicProgrammingSolution`).
3. **페이지**:
    - 서비스 파일에서 API 호출 및 로딩/에러 상태 관리.
4. **LoadingAndError 컴포넌트**:
    - 로딩 중이거나 에러가 발생한 경우 이를 UI로 표시.

---

### **7. 확장성**
1. **State Management**:
    - 상태 관리 도구(예: Redux, Zustand)로 확장 가능.
2. **다국어 지원**:
    - i18n 라이브러리를 통한 다국어 지원 예정.
3. **테스트**:
    - Jest 및 React Testing Library로 컴포넌트와 API 테스트 작성.

---

### **8. 예상 화면**
1. **대시보드**
    - 알고리즘 목록 카드 UI.
2. **알고리즘 페이지**
    - API 데이터를 기반으로 동적 UI 구성.
    - 노드/엣지 또는 솔루션 데이터 표시.

---

### **9. 목표**
- **사용자 친화적**인 데이터 시각화 제공.
- 확장 가능하고 유지보수하기 쉬운 프론트엔드 구조.
- 불확실성 기반의 의사결정 시스템 지원.

--- 

### **10. 기획 참고 사항**
- 백엔드에서 제공하는 API는 `/api/v1`를 통해 호출.
- 각 알고리즘의 API는 에러 처리 및 데이터 포맷이 일관되게 제공.
- Tailwind CSS의 유연성을 적극 활용하여 빠른 스타일링.

이 기획서를 기반으로 프로젝트를 구체적으로 확장할 수 있습니다! 🚀