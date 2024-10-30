// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section style={styles.hero}>
      <img src="../asserts/headphoto.jpg" alt="Your Avatar" style={styles.avatar} />
      <h2 style={styles.name}>Your Name</h2>
      <p style={styles.motto}>Your Motto or Tagline Goes Here</p>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: 'center',
    marginTop: '100px',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '3px solid #fff',
  },
  name: {
    fontSize: '1.8em',
    marginTop: '15px',
  },
  motto: {
    fontSize: '1.2em',
    color: '#ccc',
  }
};

export default HeroSection;
