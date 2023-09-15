import styles from './card.module.scss';

const Card = (props) => {
    return  <div className={styles.cardWrapper}>
        <div className={styles.card}>
            <img className={styles.featuredImage} src={props.featuredImage} />
            <div className={styles[`card-text-wrapper`]}>
                <a href={`/blog/${props.id}`} className={styles.title}>{props.title}</a>
                <p className={styles.description}>{props.description}</p>
                <p>{props.datePosted}</p>
            </div>
        </div>
    </div>

}

export default Card;