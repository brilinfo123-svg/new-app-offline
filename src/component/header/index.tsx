import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Head from "next/head";
import SearchBar from "../searchBar";

const header = () => {
  return (
    <div className="containerFluid">
      <Head>
        <title>On Rent</title>
        <meta name="description" content={"Buy sell and Rent"} />
      </Head>
      <header className={styles.headers}>
        <div className="container">
          <div className={styles.nav}>
            <div className={styles.HeadWrapper}>
              <div className={styles.logo}>
                <h4>Building</h4>
              </div>
              <SearchBar />
            </div>

            <div className={styles.menu}>
              <ul>
                {/* <li><Link href="">Home</Link></li>
                        <li><Link href="">About</Link></li>
                        <li><Link href="">Portfolio</Link></li>
                        <li><Link href="">Service</Link></li>
                        <li><Link href="">Contact Us</Link></li> */}
                <li className={styles.userAction}>
                  <Link href="">Login</Link>
                  <Link href="">+ Add Listing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default header;
