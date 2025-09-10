import React from "react";
import styles from "./productcard.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  location: string;
  time: string;
  description: string;
  imageUrl: string;
  price: string;
  Negotiable: string;
  id: string;
}


const ProductCard: React.FC<ProductCardProps> = ({title,location,time,description,imageUrl,price,Negotiable,id,}) => {
  return (
    <div className={styles.card}>
      <Link href={`product/${id}`}>
        <span className={styles.badge}>Featured</span>
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          className={styles.image}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>

          <p className={styles.description}>{description}</p>
          <div className={styles.rating}>{/* <p>jhsdbvjdf</p> */}</div>
          <p className={styles.meta}>
            <span className={styles.category}>
              <span className="icon-location"></span> {location}
            </span>
            <span className={styles.date}>
              <span className="icon-clock"></span> {time}
            </span>
          </p>
        </div>
        </Link>
        <div className={styles.priceCard}>
          <div className={styles.priceCardContent}>
            <h3 className={styles.priceCardPrice}>
              <span className="icon-rupee"></span>
              {price}
            </h3>
            <span className={styles.priceCardDescription}>{Negotiable}</span>
          </div>
          <div className={styles.priceCardActions}>
            <button className={styles.PriceCardButton}>
              <i className="icon-mobile"></i>
            </button>
            <button className={styles.PriceCardButton}>
              <i className="icon-heart"></i>
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default ProductCard;
