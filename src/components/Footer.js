// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Your Name. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#ccc',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  }
};

export default Footer;
