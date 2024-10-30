// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      <h1 style={styles.title}>Your Name's Blog</h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#articles" style={styles.navLink}>Articles</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>
      <button onClick={handleLoginClick}>
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
    fontSize: '1.5em',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default Header;
