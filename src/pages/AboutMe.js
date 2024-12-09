import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/AboutMe.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about-me">
      <div className="about-me-header">
        <h1>{t('aboutMe.title')}</h1>
      </div>
      <div className="about-me-intro">
        <img src="/images/iconMe.png" alt="Kenenbaev Erkin" className="avatar" />
        <p className="intro-text">{t('aboutMe.description')}</p>
      </div>
 
      <div className="contact-icons">
        <a
          href="https://www.instagram.com/kanatbekovv_77?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon instagram" />
        </a>
        <a href="kenenbaeverkin@gmail.com">
          <FaEnvelope className="icon email" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
