import React from "react";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container-fluid flex-it ${styles.headerContainer}`}>
        <div className={`row ${styles.headerRow}`}>
          <div className={`col-md-3 ${styles.headerLeft}`}>
            <a href="index.html" className={styles.logo}>
              <img
                src="https://www.linksolutions.dk/wp-content/uploads/2018/04/logo1.jpg"
                className="logo"
                alt=""
              />
            </a>
          </div>
          <div className={`col-md-6 ${styles.headerCenter}`}>
            <div className={styles.topMenu}>
              <div className={styles.navbar}>
                <ul className={styles.navbarList}>
                  <li className={styles.navbarItem}>HOME</li>
                  <li className={styles.navbarItem}>PRODUCTS</li>
                  <li className={styles.navbarItem}>INDUSTRIES</li>
                  <li className={styles.navbarItem}>NETWORK</li>
                  <li className={styles.navbarItem}>PROFILE</li>
                  <li className={styles.navbarItem}>CONTACT</li>
                  <li className={styles.navbarItem}>DOWNLOADS</li>
                </ul>
              </div>
            </div>
          </div>
          <div class={`col-md-3 ${styles.headerRight}`}>
            <div className={styles.floatR}>
              <span className={`btn gray ${styles.search}`}>
                <i className="fa fa-search"></i>
              </span>
              <span className={styles.language}>
                <img
                  src="https://www.linksolutions.dk/wp-content/uploads/flags/en.png"
                  alt=""
                />
              </span>
              <span className={styles.getInTouch}>Get in touch</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
