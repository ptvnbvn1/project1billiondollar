import React from "react";
import Product from "components/Product"

import styles from "./Content.module.scss";


export default  class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listItems: [{
            title: "EPRINT WIRE & CABLE SOFTWARE",
            link: "https://www.linksolutions.dk/wp-content/uploads/2019/10/img_1954.png"
        },
        {
            title: "EPRINT WIRE & CABLE SOFTWARE",
            link: "https://www.linksolutions.dk/wp-content/uploads/2019/10/img_1954.png"
        },
        {
            title: "EPRINT WIRE & CABLE SOFTWARE",
            link: "https://www.linksolutions.dk/wp-content/uploads/2019/10/img_1954.png"
        },
        {
            title: "EPRINT WIRE & CABLE SOFTWARE",
            link: "https://www.linksolutions.dk/wp-content/uploads/2019/10/img_1954.png"
        },
        {
            title: "EPRINT WIRE & CABLE SOFTWARE",
            link: "https://www.linksolutions.dk/wp-content/uploads/2019/10/img_1954.png"
        },
        {
            title: "EPRINT WIRE & CABLE SOFTWARE",
            link: "https://www.linksolutions.dk/wp-content/uploads/2019/10/img_1954.png"
        },
        {
            title: "EPRINT WIRE & CABLE SOFTWARE",
            link: "https://www.linksolutions.dk/wp-content/uploads/2019/10/img_1954.png"
        },
        {
            title: "EPRINT WIRE & CABLE SOFTWARE",
            link: "https://www.linksolutions.dk/wp-content/uploads/2019/10/img_1954.png"
        }]};
      }
    render(){ 
    const { listItems } = this.state;     
    return (
        <>
          <div className={styles.slide}></div>
          <div className={styles.container}>
            <div className={styles.listItems}>
              {listItems.map(item =>(
                  <Product title={item.title} link={item.link}></Product>
              ))}
            </div>
          </div>
          <div className={styles.solutions}>
                <p className={styles.description1}>Link Solutions</p>
                <p className={styles.description2}>Innovators of wire and cable marking products</p>
                <p className={styles.description3}>Link Solutions is a Danish manufacturer and supplier of cable and wire identification products, primarily computerised, for the global market. We supply high-quality identification products via distribution and local representation with well-developed logistics and excellent product availability.</p>
            </div>
        </>
    )
      }
}