import { Link } from "react-router-dom"
import styles from './style.module.scss';

const NavItem = (props) => {
    return <Link to={props.url} className={styles.navitem}>{props.name}</Link>
}

export default NavItem;