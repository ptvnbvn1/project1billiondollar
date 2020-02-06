import React from "react";
import Header from "components/Header/index.js";
import Sidebar from "components/Sidebar/index.js"

import styles from "./styles.module.scss";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Header />
      <Sidebar />
    </div>
  );
}
