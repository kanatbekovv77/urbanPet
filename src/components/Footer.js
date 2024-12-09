import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <Link to="/aboutme" className="about-me-link">
            {t('footer.developer')}
          </Link>
        </p>
        <p>{t('footer.contact')} kenenbaeverkin@gmail.com | +996 704 19-03-56</p>
      </div>
    </footer>
  );
};

export default Footer;
