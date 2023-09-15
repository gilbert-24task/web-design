import styles from './blogdetail.module.scss'

const BlogDetail = (props) => {
    return <div>
        <img className={styles.featuredimage} src={props.featuredImage} />
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}> {props.description} {props.description} {props.description} {props.description} {props.description}</p>
        <p className={styles.description}> {props.description} {props.description} {props.description} {props.description} {props.description}</p>
    </div>
}

export default BlogDetail;