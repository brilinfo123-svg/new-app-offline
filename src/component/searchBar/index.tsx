import React from 'react'
import styles from './search.module.scss';

// const options = [
//   { value: 'real_estate', label: 'Real Estate', icon: <i className='icon-heart' /> },
//   { value: 'vehicles', label: 'Vehicles', icon: <i className='icon-mobile' /> },
//   { value: 'mobile_phones', label: 'Mobile Phones', icon: <i className='icon-flag' /> },
//   { value: 'furniture', label: 'Furniture', icon: <i className='icon-twitter' /> },
//   { value: 'services', label: 'Services', icon: <i className='icon-calendar-plus-o' /> },
//   { value: 'electronics', label: 'Electronics', icon: <i className='icon-book' /> },
//   { value: 'jobs', label: 'Jobs', icon: <i className='icon-whatsapp' /> },
//   { value: 'fashion', label: 'Fashion', icon: <i className='icon-heart' /> },
// ];

const SearchBar = () => {
  return (
    <>
      <div className={styles.searchBar}>
      {/* <input
        type="text"
        placeholder="What are you looking for"
        className={styles.input}
      /> */}
      <select className={styles.select}>
        <option value="">Select Category</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
      <input
        type="text"
        placeholder="Location"
        className={styles.input}
      />
      <button className={styles.button}><i className='icon-search'></i></button>
    </div>
    </>
  )
}

export default SearchBar;