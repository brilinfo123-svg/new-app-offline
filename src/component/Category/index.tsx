import React from "react";
import styles from "./category.module.scss";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  return (
    <div className={styles.categorySlide}>
      <div className={styles.item}>
        <Link href="/">
          <Image
            src="/images/mobile-app.png"
            alt="Picture"
            width="64"
            height="50"
          />
        </Link>
        <p>Mobile</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image src="/images/car.png" alt="Picture" width="64" height="50" />
        </Link>
        <p>Cars</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image
            src="/images/24-hours.png"
            alt="Picture"
            width="64"
            height="50"
          />
        </Link>
        <p>Services</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image src="/images/house.png" alt="Picture" width="64" height="50" />
        </Link>
        <p>Real Estate</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image
            src="/images/24-hours.png"
            alt="Picture"
            width="64"
            height="50"
          />
        </Link>
        <p>Services</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image src="/images/bed.png" alt="Picture" width="64" height="50" />
        </Link>
        <p>Furniture</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image
            src="/images/motorbike.png"
            alt="Picture"
            width="64"
            height="50"
          />
        </Link>
        <p>Bike</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image
            src="/images/24-hours.png"
            alt="Picture"
            width="64"
            height="50"
          />
        </Link>
        <p>Services</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image
            src="/images/guitar.png"
            alt="Picture"
            width="64"
            height="50"
          />
        </Link>
        <p>Electronics</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image src="/images/happy.png" alt="Picture" width="64" height="50" />
        </Link>
        <p>Pats</p>
      </div>
      <div className={styles.item}>
        <Link href="/">
          <Image src="/images/cv.png" alt="Picture" width="64" height="50" />
        </Link>
        <p>Jobs</p>
      </div>
    </div>
  );
};

export default SearchBar;
