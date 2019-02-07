import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, faces }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {
          faces.map((face, i) => {
            var topRow = faces[i].topRow;
            var bottomRow = faces[i].bottomRow;
            var leftCol = faces[i].leftCol;
            var rightCol = faces[i].rightCol;
          return (
            <div className='bounding-box' style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>
          );
        })
      }
      </div>
    </div>
  );
}

export default FaceRecognition;