import React from 'react';

export default function ColorSelector({ color, toggleColor }) {
  return (
    <div className='color-selector'>
      <a onClick={toggleColor.bind(null, 'red')} className={['color color-red', setToActive('red', color)].join(' ')}>Red</a> | <a onClick={toggleColor.bind(null, 'green')} className={['color color-green', setToActive('green', color)].join(' ')}>Green</a>
    </div>
  );
}

function setToActive(color, activeColor) {
  if (color === activeColor) {
    return 'active';
  }
}
