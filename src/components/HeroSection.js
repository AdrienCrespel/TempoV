import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='../videos/trailer.mp4' autoPlay loop muted />
      <h1>TEMPO V</h1>
      <p>Le site d'entraide communautaire</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Connexion
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;