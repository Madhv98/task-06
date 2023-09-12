import styles from './header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div>Home</div>
      <div>Service</div>
      <div>Contact</div>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  )
}

export default Header


