import React, { Component, Fragment } from 'react';

function Footer() {
  return (
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3">
        6061 © 2016-{new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
