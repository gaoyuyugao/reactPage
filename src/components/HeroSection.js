// src/components/HeroSection.js
import React from 'react';
import profilePhoto from "../assets/profilephoto.jpg"

function HeroSection() {
  return (
    <section style={styles.hero}>
      <img src={profilePhoto} alt="Your Avatar" style={styles.avatar} />
      <h2 style={styles.name}>高羽</h2>
      <p style={styles.motto}>俱怀逸兴壮思飞，欲上青天揽明月</p>
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
    color: '#fff',
    fontSize: '1.8em',
    marginTop: '15px',
  },
  motto: {
    fontSize: '1.2em',
    color: '#fff',
  }
};

export default HeroSection;
