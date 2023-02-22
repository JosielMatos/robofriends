import React from "react";

const Scroll = ({ children }) => {
  return (
    <div style={{ border: '3px solid black', height: '100vh', marginTop: '20px' }}>
        {children}
    </div>
  );
    
};

export default Scroll;
