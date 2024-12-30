import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 5000, // 요청 제한 시간
});

export default apiClient;
