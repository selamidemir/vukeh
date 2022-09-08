import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div><img src='logo-main.png' alt="vukeh - sağlık yaşam için" /></div>
      <div>
        <Link to='/'>HESAPLA</Link> 
        <Link to='/nedir'>VKI NEDİR</Link> 
        <Link to='/diyet'>DİYET LİSTESİ</Link>
      </div>
    </div>
  );
}

export default Header;