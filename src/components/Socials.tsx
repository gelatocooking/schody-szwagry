import React from 'react';
import styles from './module-css/Socials.module.css'

const SocialLinks: React.FC = () => {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://facebook.com/schodyszwagry"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.tile}
        aria-label="Odwiedź nas na Facebooku"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://instagram.com/schodyszwagry"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.tile}
        aria-label="Odwiedź nas na Instagramie"
      >
        <InstagramIcon />
      </a>
      <a
        href="tel:+48661922181"
        className={styles.tile}
        aria-label="Zadzwoń do nas"
      >
        <PhoneIcon />
      </a>
    </div>
  );
};

const FacebookIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#3b5998"
    width="48px"
    height="48px"
    role="img"
    aria-labelledby="facebookIconTitle"
  >
    <title id="facebookIconTitle">Facebook</title>
    <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 5 3.68 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.52 1.51-3.91 3.81-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99c4.76-.75 8.44-4.88 8.44-9.88 0-5.52-4.48-10-10-10z"/>
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#e1306c"
    width="48px"
    height="48px"
    role="img"
    aria-labelledby="instagramIconTitle"
  >
    <title id="instagramIconTitle">Instagram</title>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.668.511a5.373 5.373 0 011.926 1.262 5.373 5.373 0 011.262 1.926c.27.698.455 1.498.511 2.668.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.511 2.668a5.373 5.373 0 01-1.262 1.926 5.373 5.373 0 01-1.926 1.262c-.698.27-1.498.455-2.668.511-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.668-.511a5.373 5.373 0 01-1.926-1.262 5.373 5.373 0 01-1.262-1.926c-.27-.698-.455-1.498-.511-2.668C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.511-2.668a5.373 5.373 0 011.262-1.926 5.373 5.373 0 011.926-1.262c.698-.27 1.498-.455 2.668-.511C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.015 7.052.072 5.771.129 4.689.341 3.778.731 2.865 1.121 2.08 1.678 1.414 2.344S.731 3.335.341 4.248c-.39.911-.602 1.993-.659 3.274C-.014 8.332 0 8.736 0 12c0 3.264-.014 3.668.072 4.948.057 1.281.269 2.363.659 3.274.39.911.947 1.696 1.674 2.423.726.726 1.511 1.283 2.423 1.674.911.39 1.993.602 3.274.659C8.332 23.986 8.736 24 12 24s3.668-.014 4.948-.072c1.281-.057 2.363-.269 3.274-.659.911-.39 1.696-.947 2.423-1.674.726-.726 1.283-1.511 1.674-2.423.39-.911.602-1.993.659-3.274C23.986 15.668 24 15.264 24 12s-.014-3.668-.072-4.948c-.057-1.281-.269-2.363-.659-3.274-.39-.911-.947-1.696-1.674-2.423-.726-.726-1.511-1.283-2.423-1.674-.911-.39-1.993-.602-3.274-.659C15.668.014 15.264 0 12 0z" />
    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
  </svg>
);


const PhoneIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#25d366"
    width="48px"
    height="48px"
    role="img"
    aria-labelledby="phoneIconTitle"
  >
    <title id="phoneIconTitle">Telefon</title>
    <path d="M19.23 15.26c-.62 0-1.22-.1-1.78-.3-.7-.25-1.47-.05-2 .45l-1.36 1.36c-2.91-1.5-5.4-3.99-6.9-6.9l1.36-1.36c.51-.51.7-1.28.45-2-.2-.57-.3-1.16-.3-1.78 0-1.07-.87-1.94-1.94-1.94H4.77C3.79 2.06 3 2.85 3 3.83 3 14.21 9.79 21 20.17 21c.98 0 1.77-.79 1.77-1.77v-2.88c0-1.07-.87-1.94-1.94-1.94z"/>
  </svg>
);

export default SocialLinks;
