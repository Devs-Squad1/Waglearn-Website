import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul className="cd-primary-nav">
        <li>
          <a href="index.html" className="animated_link">
            Home
          </a>
        </li>
        <li>
          <a href="quotation-wizard-version.html" className="animated_link">
            Quote Version
          </a>
        </li>
        <li>
          <a href="review-wizard-version.html" className="animated_link">
            Review Version
          </a>
        </li>
        <li>
          <a href="registration-wizard-version.html" className="animated_link">
            Registration Version
          </a>
        </li>
        <li>
          <a href="about.html" className="animated_link">
            About Us
          </a>
        </li>
        <li>
          <a href="contacts.html" className="animated_link">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
