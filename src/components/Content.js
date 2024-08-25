import React from 'react';
import './Content.css'; // Import styles

const Content = ({ children }) => {
  return (
    <main className="content">
      {children}
    </main>
  );
}

export default Content;
