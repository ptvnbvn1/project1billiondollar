import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div>
                    LOGO
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        )
    }
}