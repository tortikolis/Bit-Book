import React from "react";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-copyright #00acc1 cyan darken-1">
        <div className="container">© {date} Copyright Team-Undefined</div>
      </div>
    </footer>
  );
};
