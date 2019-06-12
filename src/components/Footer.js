import React from 'react';

function Footer() {
  return (
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3">
         <span>6061 Forged Rims © { new Date().getFullYear() }</span>
      </div>
    </footer>
  );
}

export default Footer;
