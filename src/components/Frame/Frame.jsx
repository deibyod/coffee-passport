import React from 'react';
import './Frame.scss';

const Frame = ({ title, footer, children }) => {
  return (
    <div className="frame">
      <div className="frame-title">{title}</div>
      <div className="frame-content">{children}</div>
      <div className="frame-footer">{footer}</div>
    </div>
  );
};

export default Frame;