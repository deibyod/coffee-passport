import React, { useState } from 'react';
import Frame from '../Frame/Frame';
import Rating from '../Rating/Rating';
import './Story.scss';

const Story = () => {
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="story">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && (
        <Frame title="My Story" footer={`Rating: ${rating} stars`}>
          <img src={image} alt="Uploaded" className="story-image" />
        </Frame>
      )}
      <Rating onRate={setRating} />
    </div>
  );
};

export default Story;