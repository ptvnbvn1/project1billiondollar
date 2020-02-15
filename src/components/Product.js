import React from "react";

import styles from "./Product.module.scss";

export default class Product extends React.Component  {
    render () {
        const { link, title} = this.props;
        return (
            <div className={styles.box}>
                <img className={styles.img} src={link}></img>
                <h3 className={styles.title}>{title}</h3>
            </div>
            
        )
    }
}

Product.defaultProps = {
    link: null,
    message: null
 }
