import React from 'react';

export default function ImageContainer({ color, image }) {
  const style = { backgroundImage: 'url(' + image + ')' };

  return (
    <div className='image-container' style={style}>
      <h2 style={{ color: setColor(color) }}>DAMN.</h2>
    </div>
  );
}

function setColor(color) {
  if (color === 'green') {
    return '#68aa7a';
  }

  return '#ea1215';
}
