
import styles from './storylistitem.module.scss';


const StoryListItem = (props) => {
    return <div className={styles.storylistitem}>
        <img className={styles.featuredImage} src={props.featuredImage} />
        <div className={styles.textwrapper}>
            <p className={styles.authorType}>{props.authorType}</p>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.description}>{props.description}</p>
        </div>
    </div>
}

export default StoryListItem;