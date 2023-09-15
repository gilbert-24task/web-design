
import Card from "./Card/Index";
import blogs from './data.json';
import styles from './blogs.module.scss';



const Blog = () => {
    console.log('blog component')
    return <div className={styles.blogwrapper}>
        
        {blogs.map((blog, index) => <Card key={index} id={blog.id} title={blog.title} description={blog.description} featuredImage={blog.featuredImage} />)}
    </div>
}

export default Blog;