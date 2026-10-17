import { createRoot } from 'react-dom/client'
import App from './App'

// three.js WebGL 컨텍스트 단일 초기화를 위해 StrictMode 미사용
createRoot(document.getElementById('root') as HTMLElement).render(<App />)
