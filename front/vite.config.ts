import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 절대 경로 사용을 위해 설정
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // 개발 서버 포트 설정
    open: true, // 개발 서버 시작 시 브라우저 자동 열기
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // 백엔드 서버 URL
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // API 경로 수정
      },
    },
  },
  build: {
    outDir: 'dist', // 빌드 파일 디렉토리
    sourcemap: true, // 디버깅을 위한 소스맵 생성
  },
});
