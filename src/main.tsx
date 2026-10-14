import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { useWorld } from './sim/store';

// 브라우저 검증용 디버그 훅 (읽기 전용 스냅샷 + 핵심 액션)
(window as unknown as Record<string, unknown>).__world = useWorld;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
