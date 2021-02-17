import styles from './Search.module.css'
import React from 'react'

const Search = ({ onChange, value, placeholder }) => {
  return (
    <div >
      <input
        type='text'
        className={styles.search}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Search
