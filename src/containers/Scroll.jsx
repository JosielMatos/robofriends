import React from "react";

const Scroll = ({ children }) => {
  return (
    <div style={{ overflow: 'scroll', border: '3px solid black', height: '500px', marginTop: '20px' }}>
        {children}
    </div>
  );
    
};

export default Scroll;
