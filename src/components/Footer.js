import React from "react";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={`row inViewportAni animated fadeInUp ${styles.content}`}>
        <div className="col-3">
         <p className={styles.title}>
         LINK SOLUTIONS
         </p>
         <p className={styles.strongText}>
         Peder Skrams Vej 11
         </p>
         <p className={`${styles.strongText} ${styles.description}`}>
         5220 Odense SØ, Denmark
         </p>
         <span className={styles.telephoneNumber}>Phone:</span><span> +45 6610 2033</span>
         <br/>
         <a className={styles.mail} href="www">
         info@linksolutions.dk
         </a>
         <br />
         <a className={styles.mail} href="www">
         order@linksolutions.dk
         </a>
         <p className={styles.cvr}>
         CVR: DK10607647
         </p>
        </div>
        <div className="col-3"></div>
        <div className={`col-3 inViewportAni animated fadeInUp ${styles.product}`}>
          <p className={styles.title}>PRODUCTS</p>
          <p>
            <a href="www">WM Heatshrinkable</a>
          </p>
          <p>
            <a href="www">Wiremarkers</a>
          </p>
          <p>
            <a href="www">Cable Markers</a>
          </p>
          <p>
           <a href="www">MTX</a>
          </p>
          <p>
            <a href="www">Wrap-arounds</a>
          </p>
          <p>
            <a href="www">Printers, Ribbons & software</a>
          </p>
          <p>
            <a href="www">Raised Panel Plates LSPP</a>
          </p>
          <p>
            <a href="www">Continuous Printable Sleeves</a>
          </p>
          <p>
            <a href="www">In & Out Door Vinyl</a>
          </p>
        </div>
        <div className={`col-3 inViewportAni animated fadeInUp ${styles.product} `}>
          <p className={styles.title}>QUICKLINKS</p>
          <p><a href="www">Network</a></p>
          <p><a href="www">Profile</a></p>
          <p><a href="www">Contact</a></p>
        </div>
      </div>
    </footer>
  )
}