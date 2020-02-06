import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export default class Sidebar extends Component {
    render() {
        return (
            <div className={styles.sidebar}>
                <div className={styles.info}>
                    <img src="https://cdn.24h.com.vn/upload/3-2018/images/2018-07-21/1532136890-362-chim-cheo-beo-ca-gan-cuoi-tren-lung-dai-bang-1-1532133446-width615height410.jpg" />
                    <h6 className={styles.username}>Phạm Tuấn Vũ</h6>
                    <p>Frontend Developer</p>
                </div>
                <hr/>
                <ul className={styles.menu}>
                    <li>HTML
                        <ul>
                            <li>
                                Learn The Basic
                            </li>
                            <li>
                                Writing Semantic HTML
                            </li>
                            <li>
                                Basic SEO
                            </li>
                            <li>
                                Accessibility
                            </li>
                        </ul>
                    </li>
                    <li>CSS
                        <ul>
                            <li>Learn the basics</li>
                            <li>Making Layouts</li>
                            <li>Media Queries</li>
                            <li>Learn CSS 3</li>
                        </ul>
                    </li>
                    <li>Javascrips
                        <ul>
                            <li>
                                Syntax and Basic Contructs
                            </li>
                            <li>
                                ES6 and modular Javascrips
                            </li>
                            <li>
                                Learn DOM manipulation
                            </li>
                            <li>
                                Learn Fetch API/AJAX
                            </li>
                            <li>
                                Understand the concepts Hoisting
                            </li>
                        </ul>
                    </li>
                    <li>How Internet Works
                        <ul>
                            <li>How browers work?</li>
                            <li>What is HTTP</li>
                            <li>What is JSON and XML</li>
                            <li>What is DNS</li>
                        </ul>
                    </li>
                    <li>Package Managers
                        <ul>
                            <li>NPM</li>
                            <li>Yarn</li>
                        </ul>
                    </li>
                    <li>CSS Architecture
                        <ul>
                            <li>BEM</li>
                            <li>OOCSS</li>
                            <li>SMACSS</li>
                        </ul>
                    </li>
                    <li>CSS Frameworks
                        <ul>
                            <li>Bootstrap</li>
                            <li>Materialize CSS</li>
                            <li>Bulma</li>
                            <li>Sematic UI</li>
                        </ul>
                    </li>
                    <li>CSS Preprocesors
                        <ul>
                            <li>SASS</li>
                            <li>PostCSS</li>
                            <li>Less</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}