import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>My favorite food would have to be sushi. I really enjoy the mix of flavors and textures.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
