import React from "react";
import Header from "components/Header";
import Content from "components/Content";
import Footer from "components/Footer"

import styles from "./LandingPage.module.scss";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Content />
      </div>
      <Footer />
    </>
  );
}
