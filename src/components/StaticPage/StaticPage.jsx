import React from 'react';
import './StaticPage.scss';

const StaticPage = ({ title, children }) => {
  return (
    <div className="static-page">
      <h1 className="static-page-title">{title}</h1>
      <div className="static-page-content">{children}</div>
    </div>
  );
};

export default StaticPage;