import React from 'react'
import styles from './addname.module.scss';

interface FeaturedAdsProps {
  title: string;
  buttonText: string;
  description: string;
}

const FeaturedAds: React.FC<FeaturedAdsProps> = ({ title, description, buttonText}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>
        {buttonText}
      </button>
    </div>
  );
};

export default FeaturedAds;