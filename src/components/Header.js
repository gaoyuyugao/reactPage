// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/Header.css';
function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (isLoggedIn) {
      onLogout();  // 如果已登录，点击按钮时登出
    } else {
      navigate('/login');  // 如果未登录，跳转到登录页面
    }
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title} onClick={() => navigate('/')}>GaoYu's Blog</h1>
      <nav style={styles.nav}>
        <button onClick={() => navigate('/')} style={styles.navLink}>主页</button>
        <button onClick={() => navigate('/articles')} style={styles.navLink}>留言</button>
        <button onClick={() => navigate('/about')} style={styles.navLink}>关于</button>
        <button onClick={() => navigate('/self-introduction')} style={styles.navLink}>自我介绍</button>
        <button onClick={() => navigate('/projects')} style={styles.navLink}>项目</button>
      </nav>
      <button onClick={handleLoginClick} style={styles.loginButton}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: '#fff',
    fontSize: '1.5em',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em',
    textDecoration: 'none',
  },
  loginButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1em',
  }
};

export default Header;
