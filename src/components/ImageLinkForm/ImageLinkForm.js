import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
  return (
    <div>
      <p className='f3'>
        {'The MemeBlur will detect faces in your meme material and blur it. Give it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange = {onInputChange} />
          <button
            className='w-30 grow f4 dib white bg-black'
            onClick = {onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;