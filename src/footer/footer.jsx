import styles from './footer.module.css'

function Footer() {
    return (
      <div className={styles.footer}>
        <p>Contact</p>
        <p>Email: <a href="mailto:google.com">helpdesk@gmeail.com</a></p>
        <p>Address: 123 Main St, MD</p>
      </div>
    );
  }
  
  export default Footer;
