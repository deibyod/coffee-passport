import React from 'react';
import html2canvas from 'html2canvas';
import './Frame.scss';

const Frame = ({ title, footer, children }) => {
  const downloadImage = () => {
    const frameElement = document.querySelector('.frame');
    if (frameElement) {
      html2canvas(frameElement).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'frame.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

  return (
    <div className="frame">
      <div className="frame-title">{title}</div>
      <div className="frame-content">{children}</div>
      <div className="frame-footer">{footer}</div>
      <button onClick={downloadImage}>Download Image</button>
    </div>
  );
};

export default Frame;