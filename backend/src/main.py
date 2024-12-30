from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.v1.endpoints import bayesian, influence, dynamic, reinforcement, pomdp
from core.config import settings
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# FastAPI 앱 초기화
app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    description="UncerAI: Decision Making Under Uncertainty"
)

# CORS 설정
origins = [
    "http://localhost:3000",  # React 개발 서버
    "http://127.0.0.1:3000",  # React 개발 서버 (로컬)
    "https://your-production-url.com"  # 실제 운영 URL (필요 시 추가)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 허용할 출처
    allow_credentials=True,  # 쿠키 등을 포함한 자격 증명 허용
    allow_methods=["*"],  # 허용할 HTTP 메서드
    allow_headers=["*"],  # 허용할 HTTP 헤더
)

# 라우터 등록
app.include_router(bayesian.router, prefix="/api/v1/bayesian", tags=["Bayesian Networks"])
app.include_router(dynamic.router, prefix="/api/v1/dynamic", tags=["Dynamic Programming"])
app.include_router(influence.router, prefix="/api/v1/influence", tags=["Influence Diagrams"])
app.include_router(pomdp.router, prefix="/api/v1/pomdp", tags=["POMDP"])
app.include_router(reinforcement.router, prefix="/api/v1/reinforcement", tags=["Reinforcement Learning"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("src.main:app", host="0.0.0.0", port=8000, reload=True)
