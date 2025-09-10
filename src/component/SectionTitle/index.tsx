import React from 'react';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title?: string;
  description?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = React.memo(({ title = 'Default Title', description = 'Default description text goes here.' }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
});

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;