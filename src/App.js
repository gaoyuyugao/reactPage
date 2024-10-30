// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,useLocation} from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import ArticleDetail from './pages/ArticlesDetail';
import About from './pages/About';
import Projects from './pages/Projects';
import LeaveWord from './pages/LeaveWord';
import Selfintroduction from './pages/Selfintroduction';
import './styles/App.css'


function MainContent({ isLoggedIn, handleLogin, handleLogout }) {
  const location = useLocation();

  // 定义不需要显示 Header 的路径
  const hideHeaderPaths = ['/articles/'];

  // 判断当前路径是否包含在 hideHeaderPaths 里
  const shouldHideHeader = hideHeaderPaths.some(path => location.pathname.startsWith(path));

  return (
    <div className="app">
      {/* 条件渲染 Header */}
      {!shouldHideHeader && <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* 设置欢迎页面为默认页面 */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Welcome />} />
        <Route path="/articles/:id" element={<ArticleDetail />} /> {/* 新增文章详情路由 */}
        <Route path="/about" element={<About />} /> {/* 新增关于页面 */}
        <Route path="/projects" element={<Projects />} /> {/* 新增项目页面 */}
        <Route path="/leaveWord" element={<LeaveWord />} /> {/* 新增留言页面 */}
        <Route path="/self_introduction" element={<Selfintroduction />} /> {/* 新增自我介绍页面 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <MainContent
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </Router>
  );
}

export default App;
