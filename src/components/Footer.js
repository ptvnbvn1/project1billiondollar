import React from "react";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={`row ${styles.content}`}>
        <div className="col-3">
         <p>
         LINK SOLUTIONS
         </p>
         <p>
         Peder Skrams Vej 11
         </p>
         <p>
         5220 Odense SØ, Denmark
         </p>
         <p>
         Phone: +45 6610 2033
         </p>
         <a>
         info@linksolutions.dk
         </a>
         <br />
         <a>
         order@linksolutions.dk
         </a>
         <p>
         CVR: DK10607647
         </p>
        </div>
        <div className="col-3"></div>
        <div className="col-3">
          <p>PRODUCTS</p>
          <p>
            <a>WM Heatshrinkable</a>
          </p>
          <p>
            <a>Wiremarkers</a>
          </p>
          <p>
            <a>Cable Markers</a>
          </p>
          <p>
           <a>MTX</a>
          </p>
          <p>
            <a>Wrap-arounds</a>
          </p>
          <p>
            <a>Printers, Ribbons & software</a>
          </p>
          <p>
            <a>Raised Panel Plates LSPP</a>
          </p>
          <p>
            <a>Continuous Printable Sleeves</a>
          </p>
          <p>
            <a>In & Out Door Vinyl</a>
          </p>
        </div>
        <div className="col-3">
          <p>QUICKLINKS</p>
          <p><a>Network</a></p>
          <p><a>Profile</a></p>
          <p><a>Contact</a></p>
        </div>
      </div>
    </footer>
  )
}