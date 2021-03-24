import styles from './header.module.css'

function Header(props) {
  return <header className={styles.basic}>{props.titulo}</header>
}

export default Header