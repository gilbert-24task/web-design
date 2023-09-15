import styles from './featuredstory.module.scss';

const FeaturedStory = () => {

    let story =   {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "featuredImage": "https://gizmodo.com.au/wp-content/uploads/2023/01/25/google-reverse-image-search.png?quality=75"
  };

    return <div className={styles.featuredStory}>
        <img src={story.featuredImage} />
        <div className={styles.textwrapper}>
            <p className={styles.authortype}></p>
            <h1 className={styles.title}>{story.title}</h1>
            <p className={styles.description}>{story.description}</p>
        </div>
    </div>
}

export default FeaturedStory;