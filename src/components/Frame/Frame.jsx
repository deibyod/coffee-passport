import React from 'react';
import html2canvas from 'html2canvas';
import './Frame.scss';

const Frame = ({ title, footer, children }) => {
  const shareOnInstagram = async () => {
    try {
      const frameElement = document.querySelector('.frame');
      if (frameElement) {
        const canvas = await html2canvas(frameElement);
        const imageData = canvas.toDataURL('image/png');

        const formData = new FormData();
        formData.append('file', dataURItoBlob(imageData), 'frame.png');

        const response = await fetch('https://graph.instagram.com/v1.0/me/media', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Failed to upload media: ${response.statusText}`);
        }

        const result = await response.json();
        const mediaId = result.id;

        const publishResponse = await fetch(`https://graph.instagram.com/v1.0/me/media_publish`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            media_id: mediaId,
          }),
        });

        if (!publishResponse.ok) {
          throw new Error(`Failed to publish media: ${publishResponse.statusText}`);
        }

        alert('Shared on Instagram Story!');
      }
    } catch (error) {
      console.error('Error sharing on Instagram:', error);
      alert(`Error sharing on Instagram: ${error.message}`);
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className="frame">
      <div className="frame-title">{title}</div>
      <div className="frame-content">{children}</div>
      <div className="frame-footer">{footer}</div>
      <button onClick={shareOnInstagram}>Share on Instagram</button>
    </div>
  );
};

export default Frame;