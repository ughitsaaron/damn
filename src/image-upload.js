/* eslint-disable max-len */
import React from 'react';

export default function ImageUpload({ setImage }) {
  return (
    <div className='image-upload'>
      <label htmlFor='upload'>
        Select File
        <input id='upload' type='file' accept='image/jpeg,image/png' onChange={e => handleFile(e, setImage)} />
      </label>
    </div>
  );
}

function handleFile(e, cb) {
  const { files } = e.target;
  const reader = new FileReader();

  reader.readAsDataURL(files[0]);
  reader.onload = e => cb(e.target.result);
}
