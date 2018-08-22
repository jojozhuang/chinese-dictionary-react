import React from 'react';
import { Button, ButtonToolbar, PageHeader } from 'react-bootstrap';

const Header = () => (
  <div>
    <div className="container">
      <PageHeader>
        Chinese Dictionary <small>built with React, Express, Node.js and Webpack</small>
      </PageHeader>
    </div>
  </div>
);

export default Header;
