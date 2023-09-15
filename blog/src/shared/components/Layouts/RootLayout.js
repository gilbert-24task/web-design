import Nav from "../Nav/Index";
import styles from './rootlayout.module.scss'

const RootLayout = ({children}) => {
    return <>
        <Nav brandname="Root Navigation"/>
        <div className={styles.pagewrapper}>
            {children}
        </div>
    </>
}

export default RootLayout;